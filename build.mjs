import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import * as child_process from 'child_process';
import * as url from 'url';

// rollup and plugins
import { rollup } from 'rollup';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import postcss_url from 'postcss-url';
import del from 'rollup-plugin-delete';

// These are not available in an esm context
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function usage() {
  console.log(`Usage: node ${process.argv[1]} [build|check] [packagename]`);
  process.exit(1);
}

if (process.argv.length !== 4) usage();
run(process.argv[2].toLowerCase(), process.argv[3]);

async function run(action, package_name) {
  const PACKAGE_PATH = path.join(__dirname, package_name);

  const package_json = JSON.parse(
    fs.readFileSync(path.join(PACKAGE_PATH, 'package.json')),
  );

  switch (action) {
    case 'build': {
      await check(PACKAGE_PATH);
      await build(PACKAGE_PATH, package_json);
      console.log('building');
      process.exit(0);
    }
    case 'check': {
      await check(PACKAGE_PATH);
      process.exit(0);
    }
    default:
      usage();
  }
}

async function check(package_path) {
  // Check whether our code is good
  // exec() throws on non-zero exit codes
  console.log('Typechecking...');
  child_process.execSync('tsc --noEmit --project ./tsconfig.json', {
    stdio: [0, 1, 2],
    cwd: package_path,
  });

  /*
  // TODO: enable when eslint is fixed
  console.log('Linting...');
  child_process.execSync('eslint -c .eslintrc.json .', {
    stdio: [0, 1, 2],
    cwd: package_path
  });
  */
}

async function build(package_path, package_json) {
  if (!package_json.module) throw new Error('Add .module to package.json');
  const OUTPUT_PATH = path.resolve(package_path, package_json.module);
  const OUTPUT_DIR = path.dirname(OUTPUT_PATH);

  // Step 1: Rollup the JavaScript
  // This will also generate a bunch of *.d.ts files in dist/types/
  try {
    console.log('Compiling code...');
    let bundle = await rollup({
      input: path.join(package_path, 'src', 'index.ts'),
      plugins: [
        del({ targets: path.join(package_path, 'dist', '*') }),
        replace({
          preventAssignment: true,
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve(),
        commonjs(),
        typescript({
          tsconfig: path.join(package_path, 'tsconfig.json'),
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
          to: path.join(OUTPUT_DIR, 'assets'),
          plugins: [
            postcss_url({
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
      path.join(package_path, 'src', 'default_style.css'),
      path.join(OUTPUT_DIR, 'default_style.css'),
    );
  } catch (e) {
    console.error('Copying the default style failed', e);
    process.exit(1);
  }

  // TODO: maybe we should clean dist/types?

  console.log('Build succeeded');
}
