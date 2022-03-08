import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import * as child_process from 'child_process';
import { writeSource } from './node_api_helpers.mjs';

// rollup and plugins
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ttypescript from 'ttypescript';
import typescript from '@rollup/plugin-typescript';

const MAX_FAILURES = 20;
const CACHE = 'gw2apicache';

const TYPEGUARD_OUTPUT_DIR = './src/gw2api/typeguards/out';

async function run() {
  console.log('Generating type guards');
  // Just compiling these with tsc is not enough
  let bundle = await rollup({
    input: './src/gw2api/typeguards/guards.ts',
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        typescript: ttypescript,
        tsconfig: './src/gw2api/typeguards/tsconfig.json',
      }),
    ],
    external: ['react', 'react-dom'],
  });
  await bundle.write({
    file: TYPEGUARD_OUTPUT_DIR + '/guards.mjs',
    format: 'esm',
    sourcemap: false,
  });
  bundle.close();

  const {
    isGW2ApiItem,
    isGW2ApiSkill,
    isGW2ApiSpecialization,
    isGW2ApiTrait,
    ITEM_OVERRIDES,
    SKILL_OVERRIDES,
    SPECIALIZATION_OVERRIDES,
    TRAIT_OVERRIDES,
  } = await import(`./src/gw2api/typeguards/out/guards.mjs`);

  const endpoint_to_guard = {
    _v2_items: [isGW2ApiItem, 'GW2ApiItem', 'items/item', ITEM_OVERRIDES],
    _v2_skills: [isGW2ApiSkill, 'GW2ApiSkill', 'skills/skill', SKILL_OVERRIDES],
    _v2_specializations: [
      isGW2ApiSpecialization,
      'GW2ApiSpecialization',
      'specialization/specialization',
      SPECIALIZATION_OVERRIDES,
    ],
    _v2_traits: [isGW2ApiTrait, 'GW2ApiTrait', 'traits/trait', TRAIT_OVERRIDES],
  };

  for (let e in endpoint_to_guard) {
    if (typeof endpoint_to_guard[e][0] !== 'function') {
      console.error(endpoint_to_guard);
      throw new Error('Generating the type guards failed');
    }
  }

  let files = fs.readdirSync(CACHE, 'utf8');
  let failures = 0;
  for (let file of files) {
    if (!file.endsWith('.json')) {
      continue;
    }

    let info = undefined;
    for (let endpoint in endpoint_to_guard) {
      if (file.startsWith(endpoint)) {
        info = endpoint_to_guard[endpoint];
        break;
      }
    }
    if (!info) {
      console.log('Skipping', file);
      continue;
    }
    let [guard, typename, typesrc, overrides] = info;

    console.log('Checking', file);
    let arr = JSON.parse(fs.readFileSync(path.join(CACHE, file), 'utf8'));
    for (let o of arr) {
      let id = o.id;
      let item = o;
      for (let f of overrides) {
        item = f(id, item);
      }
      try {
        guard(o);
      } catch (e) {
        failures++;
        if (failures > MAX_FAILURES) {
          console.log(
            'More than',
            MAX_FAILURES,
            'failures encountered. Fix the types and run again',
          );
          process.exit(1);
        }
        let code = `
import ${typename} from '../../types/${typesrc}';

/*
${file}: ${id}
${e}
*/
const _: ${typename} = ${JSON.stringify(o)};
        `;
        writeSource(
          `gw2api/typeguards/failures/failure_${('' + failures).padStart(
            3,
            '0',
          )}.ts`,
          code,
        );
      }
    }
  }
  console.log('Done');
  if (failures === 0) console.log('No errors encountered');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
