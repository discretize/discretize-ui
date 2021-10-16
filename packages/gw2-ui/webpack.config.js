var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externalsPresets: {
      node: true // in order to ignore built-in modules like path, fs, etc. 
  },
  output: {
    library: 'Gw2Ui',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
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
    extensions: ['.js', '.jsx'],
  },
  externals: [nodeExternals()],
  devtool: 'source-map',
}