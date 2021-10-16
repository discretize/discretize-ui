import * as webpack from 'webpack';

const config: webpack.Configuration = {
  output: {
    library: 'Gw2UiBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
      },
    ],
  },
  devtool: 'source-map',
};

export default config;