module.exports = {
  output: {
    library: "Gw2UiBuilder",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          rootMode: "upward",
        },
      },
    ],
  },
  devtool: "source-map",
};
