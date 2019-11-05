const babelConfigPath = require('path').join(__dirname, 'babel.config.js');
// eslint-disable-next-line
const babelConfig = require(babelConfigPath);
module.exports = require('babel-jest').createTransformer(babelConfig);
