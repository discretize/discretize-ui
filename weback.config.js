// webpack.config.js

/* eslint-disable */
const path = require("path");
const webpack = require("webpack");

const ENVIRONMENT = process.env.NODE_ENV;
const PRODUCTION = ENVIRONMENT === "production";
const SOURCEMAP = !PRODUCTION || process.env.SOURCEMAP;

const library = "react-discretize-components";
const filename = PRODUCTION ? `${library}.min.js` : `${library}.js`;

const plugins = [];

if (PRODUCTION) {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(ENVIRONMENT),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: { comments: false, semicolons: false },
      sourceMap: SOURCEMAP,
    })
  );
}

module.exports = {
  devtool: SOURCEMAP ? "source-map" : "none",
  entry: `${__dirname}/index.js`,
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename,
    library,
    path: `${__dirname}/lib`,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  plugins,
};
