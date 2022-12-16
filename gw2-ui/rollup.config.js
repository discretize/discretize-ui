// rollup and plugins
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
// import dts from 'rollup-plugin-dts';
import postcss_url from 'postcss-url';
import {babel} from '@rollup/plugin-babel';
import path from "path";

// cuts off the name of the folder to allow building from package root or repo root
// eslint-disable-next-line no-undef
const baseDir = path.join(__dirname.replaceAll('gw2-ui', ''), 'gw2-ui');

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
        minimize: true,
        to: path.join(baseDir, 'dist', 'assets'),
        plugins: [
          postcss_url({
            assetsPath: path.join(baseDir, 'src', 'assets'),
            url: 'copy',
          }),
        ],
      }),
    ],
    external: [
      // Do not bundle react or other common dependencies
      'react',
      'react-dom',
    ],
  }
  if (env === 'production') baseConfig.plugins.push(terser());
  return baseConfig
}

export default [
  Object.assign({}, createBaseConfig('development'), {
    output: {
      dir: path.join(baseDir, 'dist', 'esm'),
      format: 'esm',
      entryFileNames: "[name].mjs",
      sourcemap: true
    }
  }),
  Object.assign({}, createBaseConfig('development'), {
    output: {
      dir: path.join(baseDir, 'dist', 'cjs'),
      format: 'cjs',
      entryFileNames: "[name].cjs.js",
      sourcemap: true
    }
  }),
  Object.assign({}, createBaseConfig('production'), {
    output: {
      dir: path.join(baseDir, 'dist', 'mjs'),
      format: 'esm',
      entryFileNames: "[name].min.mjs",
      sourcemap: true
    }
  })
]
