import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import * as child_process from 'child_process';

// rollup and plugins
import { rollup } from 'rollup';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import url from 'postcss-url';
import del from 'rollup-plugin-delete';

const package_json = JSON.parse(fs.readFileSync('./package.json'));

if (!package_json.module) throw new Error('Add .module to package.json');
const OUTPUT_PATH = path.resolve(package_json.module);
const OUTPUT_DIR = path.dirname(OUTPUT_PATH);

async function run() {
  // Check whether our code is good
  // exec() throws on non-zero exit codes
  console.log('Typechecking...');
  child_process.execSync('tsc --noEmit --project ./tsconfig.json', {
    stdio: [0, 1, 2],
  });

  /*
  // TODO: enable when eslint is fixed
  console.log('Linting...');
  child_process.execSync('eslint -c .eslintrc.json .', {
    stdio: [0, 1, 2],
  });
  */

  // Step 1: Rollup the JavaScript
  // This will also generate a bunch of *.d.ts files in dist/types/
  try {
    console.log('Compiling code...');
    let bundle = await rollup({
      input: 'src/index.ts',
      plugins: [
        del({ targets: './dist/*' }),
        replace({
          preventAssignment: true,
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve(),
        commonjs(),
        typescript({
          tsconfig: './tsconfig.json',
          noEmitOnError: false,
          outDir: OUTPUT_DIR,
          declaration: true,
          declarationDir: 'types',
          exclude: ['**/*.stories.tsx', '*.module.css'],
        }),
        postcss({
          extract: true,
          modules: true,
          minimize: true,
          to: './dist/assets',
          plugins: [
            url({
              assetsPath: './src/assets',
              url: 'copy',
            }),
          ],
        }),
        terser(),
      ],
      external: ['react', 'react-dom'],
    });
    await bundle.write({
      file: OUTPUT_PATH,
      format: 'esm',
      sourcemap: false,
    });
    bundle.close();
  } catch (e) {
    console.error('Rollup .js failed', e);
    process.exit(1);
  }

  // Step 2: bundle the types
  try {
    console.log('Bundling types...');
    let bundle = await rollup({
      input: path.join(OUTPUT_DIR, 'types', 'index.d.ts'),
      plugins: [dts()],
    });
    await bundle.write({
      file: package_json.types || OUTPUT_PATH + '.d.ts',
      format: 'es',
      sourcemap: false,
    });
    bundle.close();
  } catch (e) {
    console.error('Rollup .d.ts failed', e);
    process.exit(1);
  }

  // Step 3: copy over the default style
  try {
    fs.copyFileSync(
      './src/default_style.css',
      path.join(OUTPUT_DIR, 'default_style.css'),
    );
  } catch (e) {
    console.error('Copying the default style failed', e);
    process.exit(1);
  }

  // TODO: maybe we should clean dist/types?

  console.log('Build succeeded');
  process.exit(0);
}

run();
