import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import * as child_process from 'child_process';
import * as url from 'url';
import rimraf from 'rimraf';

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
import { babel } from '@rollup/plugin-babel';

// These are not available in an esm context
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_INFO_CACHE = new Map();
function getPackageInfo(package_name) {
  if (!PACKAGE_INFO_CACHE.has(package_name)) {
    const package_path = path.join(__dirname, package_name);

    const package_json = JSON.parse(
      fs.readFileSync(path.join(package_path, 'package.json')),
    );
    PACKAGE_INFO_CACHE.set(package_name, {
      package_path,
      package_json,
    });
  }
  return PACKAGE_INFO_CACHE.get(package_name);
}

async function run() {
  await check('gw2-ui');
  await build('gw2-ui');
  await check('react-discretize-components');
  await build('react-discretize-components');
  process.exit(0);
}
run();

async function check(package_name) {
  let { package_path } = getPackageInfo(package_name);

  // Check whether our code is good
  // exec() throws on non-zero exit codes
  console.log(`Typechecking ${package_name}...`);
  child_process.execSync('tsc --noEmit --project ./tsconfig.json', {
    stdio: [0, 1, 2],
    cwd: package_path,
  });

  /*
  // TODO: enable when eslint is fixed
  console.log(`Linting ${package_name}...`);
  child_process.execSync('eslint -c .eslintrc.json .', {
    stdio: [0, 1, 2],
    cwd: package_path
  });
  */
}

async function build(package_name) {
  let { package_path, package_json } = getPackageInfo(package_name);

  if (!package_json.module) throw new Error('Add .module to package.json');
  const OUTPUT_PATH = path.resolve(package_path, package_json.module);
  const OUTPUT_DIR = path.dirname(OUTPUT_PATH);
  const DECLARATION_DIR = path.join(OUTPUT_DIR, 'types');

  rimraf.sync(OUTPUT_PATH);

  // Step 1: Rollup the JavaScript
  // This will also generate a bunch of *.d.ts files in dist/types/
  try {
    console.log(`Compiling ${package_name}...`);
    let bundle = await rollup({
      input: path.join(package_path, 'src', 'index.ts'),
      plugins: [
        replace({
          preventAssignment: true,
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve(),
        commonjs(),
        typescript({
          filterRoot: package_path,
          tsconfig: path.join(package_path, 'tsconfig.json'),
          noEmitOnError: false,
          outDir: OUTPUT_DIR,
          declaration: true,
          // Yes, the declarationDir does not contain the 'dist' folder.
          // I do not understand why, but this way it works.
          declarationDir: path.join(package_path, 'types'),
          exclude: ['**/*.stories.tsx', '*.module.css', 'dist'],
        }),
        babel({
          // Note: babel is only required for jsx files.
          // Typescript handles .tsx, and we don't need to touch plain js files.
          extensions: ['.jsx'],
          presets: [['@babel/preset-react', { runtime: 'automatic' }]],
          babelHelpers: 'bundled',
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
      external: [
        // Do not bundle react or other common dependencies
        'react',
        'react-dom',
        // These are deps of react-discretize-components
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/material',
        '@mui/styles',
        'classnames',
        'tss-react',
        'typeface-fira-mono',
        'typeface-menomonia',
        'typeface-muli',
        'typeface-raleway',
        // Do not bundle our own packages, either
        '@discretize/gw2-ui',
        '@discretize/react-discretize-components',
        '@discretize/typeface-menomonia',
        'typeface-menomonia', // legacy package
      ],
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
  if (package_json.types) {
    try {
      console.log(`Bundling types in ${package_name}...`);
      let bundle = await rollup({
        input: path.join(DECLARATION_DIR, 'index.d.ts'),
        plugins: [dts()],
      });
      await bundle.write({
        file: path.resolve(package_path, package_json.types),
        format: 'es',
        sourcemap: false,
      });
      bundle.close();
    } catch (e) {
      console.error('Rollup .d.ts failed', e);
      process.exit(1);
    }
  }
  // Clean the unbundled type files
  rimraf.sync(DECLARATION_DIR);

  // Step 3: copy over the default style
  try {
    const default_style_path = path.join(
      package_path,
      'src',
      'default_style.css',
    );
    if (fs.existsSync(default_style_path)) {
      console.log(`Copying default style in ${package_name}...`);
      fs.copyFileSync(
        default_style_path,
        path.join(OUTPUT_DIR, 'default_style.css'),
      );
    }
  } catch (e) {
    console.error('Copying the default style failed', e);
    process.exit(1);
  }

  console.log(`Building ${package_name} succeeded`);
}
