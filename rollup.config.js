import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
    name: 'discretizeComponents',
  },
  external: [
    /@material-ui\/core/,
    /gw2-ui-bulk/,
    /gatsby-plugin-image/,
    /gw2-ui-components-bulk/,
    /classnames/,
    'react',
    /react\//,
    /@babel\/runtime/,
  ],
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx'],
    }),
    babel({
      presets: ['@babel/preset-env', ['@babel/preset-react', { 'runtime': 'automatic' }]],
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    commonjs(),
  ],
};
