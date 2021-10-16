import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
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
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'Gw2UiBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    axios: {
      root: 'Axios',
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
    },
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
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
  devtool: 'source-map',
};

export default config;