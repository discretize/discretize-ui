import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import * as child_process from 'child_process';
import { writeSource } from './node_api_helpers.mjs';

const MAX_FAILURES = 20;
const CACHE = 'gw2apicache';

async function run() {
  console.log('Generating type guards');
  child_process.execSync(
    'ttsc --project "src/gw2api/typeguards/tsconfig.json"',
    {
      stdio: [0, 1, 2],
    },
  );

  // Due to compiling the guards with --outDir, this path is a bit convoluted
  const { isGW2ApiItem, isGW2ApiSkill, isGW2ApiSpecialization, isGW2ApiTrait } =
    await import(`./src/gw2api/typeguards/out/gw2api/typeguards/guards.mjs`);

  const endpoint_to_guard = {
    _v2_items: [isGW2ApiItem, 'GW2ApiItem', 'items/item'],
    _v2_skills: [isGW2ApiSkill, 'GW2ApiSkill', 'skills/skill'],
    _v2_specializations: [
      isGW2ApiSpecialization,
      'GW2ApiSpecialization',
      'specialization/specialization',
    ],
    _v2_traits: [isGW2ApiTrait, 'GW2ApiTrait', 'traits/trait'],
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

    let info;
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
    let [guard, typename, typesrc] = info;

    let arr = JSON.parse(fs.readFileSync(path.join(CACHE, file), 'utf8'));
    for (let o of arr) {
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
${file}: ${o.id}
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
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

/*
let files = fs.readdirSync(PATH, 'utf8');
let failed = [];
for (let file of files) {
  if (!file.endsWith('.ts')) continue;

  let fullpath = path.join(PATH, file);
  console.log(fullpath);
  try {
    child_process.execSync(`tsc --noEmit --strict "${fullpath}"`, {
      stdio: ['ignore', 'ignore', 'ignore'],
    });
    fs.renameSync(fullpath, fullpath + '.checked');
  } catch (e) {
    console.log(e);
    failed.push(file);
  }
}
if (failed.length > 0) {
  console.log('Errors in the following files');
  console.log(failed);
  process.exit(1);
}

console.log('All files checked');
process.exit(0);
*/
