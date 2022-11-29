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
  await lint_repo_root();
  await build('gw2-ui');
  await build('react-discretize-components');
  await build('globals');
  process.exit(0);
}
run();

async function lint_repo_root() {
  // Note: exec() throws on non-zero exit codes
  console.log(`Checking formatting...`);
  child_process.execSync(
    'prettier --check --config ./.prettierrc.json --ignore-path ./.prettierignore .',
    {
      stdio: [0, 1, 2],
      cwd: __dirname,
    },
  );

  console.log(`Linting...`);
  child_process.execSync('eslint -c ./.eslintrc.cjs "."', {
    stdio: [0, 1, 2],
    cwd: __dirname,
  });
}

async function build(package_name) {
  let { package_path, package_json } = getPackageInfo(package_name);

  if (!package_json.module) throw new Error('Add .module to package.json');
  const OUTPUT_PATH = path.resolve(package_path, package_json.module);
  const OUTPUT_DIR = path.dirname(OUTPUT_PATH);

  rimraf.sync(OUTPUT_DIR);

  // Step 1: Run tsc
  // This checks all types and emits declaration files
  console.log(`Running tsc on ${package_name}...`);
  child_process.execSync(
    'tsc --declaration --noEmit false --emitDeclarationOnly --declarationDir "dist/types" --project ./tsconfig.json',
    {
      stdio: [0, 1, 2],
      cwd: package_path,
    },
  );

  // Step 2: Rollup the JavaScript
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
          noEmitOnError: true,
          exclude: ['*.js', '*.jsx', '*.css', '**/*.stories.tsx', 'dist'],
          // Specify a bogus outdir, otherwise typescript will error with TS5055
          outDir: path.join(OUTPUT_DIR, 'this_directory_does_not_exist'),
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
        'classnames',
        'typeface-fira-mono',
        'typeface-muli',
        'typeface-raleway',
        // for globals
        '@mui/material',
        '@mui/icons-material',
        '@mui/styles',
        '@mui/material/styles',
        '@emotion/react',
        '@emotion/styled',
        'classnames',
        'tss-react',
        'tss-react/mui',

        // Do not bundle our own packages, either
        '@discretize/gw2-ui-new',
        '@discretize/react-discretize-components',
        '@discretize/globals',
        '@discretize/typeface-menomonia',
      ],
    });
    await bundle.write({
      dir: OUTPUT_DIR,
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
        input: path.join(OUTPUT_DIR, 'types', 'index.d.ts'),
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
  rimraf.sync(path.join(OUTPUT_DIR, 'types'));

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
