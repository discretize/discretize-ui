// rollup and plugins
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
// import dts from 'rollup-plugin-dts';
import postcss_url from 'postcss-url';
import { babel } from '@rollup/plugin-babel';
import path from "path";

// cuts off the name of the folder to allow building from package root or repo root
const baseDir = __dirname.replaceAll('gw2-ui', '');

export default [
  {
  input: path.join(baseDir, 'gw2-ui', 'src', 'index.ts'),
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    resolve(),
    commonjs(),
    typescript({
      filterRoot: path.join(baseDir, 'gw2-ui'),
      tsconfig: path.join(baseDir, 'gw2-ui', 'tsconfig.json'),
      noEmitOnError: true,
      exclude: ['*.js', '*.jsx', '*.css', '**/*.stories.tsx', 'dist'],
      // Specify a bogus outdir, otherwise typescript will error with TS5055
      outDir: path.join(baseDir, 'dist', 'this_directory_does_not_exist'),
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
      to: path.join('./dist', 'assets'),
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
  ],
}
]
