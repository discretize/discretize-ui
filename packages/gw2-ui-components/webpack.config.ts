var nodeExternals = require('webpack-node-externals')

import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  target: 'node',
  externalsPresets: {
    node: true, // in order to ignore built-in modules like path, fs, etc.
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          rootMode: 'upward',
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'Gw2UiBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devtool: 'source-map',
}

export default config
