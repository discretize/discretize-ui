import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          rootMode: 'upward',
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    ],
  },
  externals: {
    axios: {
      root: 'Axios',
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
    },
    redux: {
      root: 'Redux',
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
    },
    reselect: {
      root: 'Reselect',
      commonjs: 'reselect',
      commonjs2: 'reselect',
      amd: 'reselect',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'Gw2UiBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devtool: 'source-map',
};

export default config;