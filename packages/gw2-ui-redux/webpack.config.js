module.exports = {
  output: {
    library: 'Gw2UiRedux',
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
  devtool: 'source-map',
}
