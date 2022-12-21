// rollup and plugins
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import postcss_url from 'postcss-url';
import {babel} from '@rollup/plugin-babel';
import path from "path";

// cuts off the name of the folder to allow building from package root or repo root
// eslint-disable-next-line no-undef
const baseDir = path.join(__dirname.replaceAll('gw2-ui', ''), 'gw2-ui');
const distDir = path.join(baseDir, 'dist');

const createBaseConfig = (env) => {
  const baseConfig = {
    input: path.join(baseDir, 'src', 'index.ts'),
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(env === 'development' ? 'development' : 'production'),
      }),
      resolve(),
      commonjs(),
      typescript({
        filterRoot: baseDir,
        tsconfig: path.join(baseDir, 'tsconfig.json'),
        noEmitOnError: true,
        exclude: ['*.js', '*.jsx', '*.css', '**/*.stories.tsx', 'dist'],
      }),
      babel({
        // Note: babel is only required for jsx files.
        // Typescript handles .tsx, and we don't need to touch plain js files.
        extensions: ['.jsx'],
        presets: [['@babel/preset-react', {runtime: 'automatic'}]],
        babelHelpers: 'bundled',
      }),
      postcss({
        extract: true,
        modules: true,
        minimize: false,
        to: path.join(distDir, 'not-a-real-dir' , 'but-tricks-plugin-to-do-correct-work'),
        plugins: [
          postcss_url([
            {
              assetsPath: path.join(distDir, 'assets'),
              url: 'copy',
              useHash: true,
            }
          ]),
        ],
      }),
    ],
    external: [
      // Do not bundle react or other common dependencies
      'react',
      'react-dom',
    ],
    output: [
      {
        dir: path.join(distDir, 'esm'),
        format: 'esm',
        entryFileNames: `[name].esm.js`,
        sourcemap: true
      },
      {
        dir: path.join(distDir, 'cjs'),
        format: 'cjs',
        entryFileNames: `[name].cjs.js`,
        sourcemap: true
      }
    ]
  }
  if (env === 'production') baseConfig.plugins.push(terser());
  return baseConfig
}

const typeGenConfig = {
  input: path.join(baseDir, 'src', 'index.ts'),
  plugins: [
    postcss({
      extract: 'gw2-ui-tokens.css', // this will generate a specific file not being used, but we need this part of code
      autoModules: true,
      include: '**/*.css',
      extensions: ['.css'],
      plugins: [],
    }),
    dts({
        compilerOptions: {
          baseUrl: path.join(baseDir, 'src')
        }
    })
  ],
  output: {
    dir: path.join(distDir, 'types'),
    format: 'es'
  }
};

export default [
  typeGenConfig,
  createBaseConfig('development'),

]
