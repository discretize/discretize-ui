/* eslint-disable no-param-reassign */
const webpack = require('webpack');

module.exports = async ({ config, mode }) => {
  config.devServer = {
    stats: 'minimal',
  };

  if (mode === 'DEVELOPMENT') {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
