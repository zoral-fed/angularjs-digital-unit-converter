const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9090
  },
  externals: {
    angular: 'angular',
    'angular-ui-router': 'angular-ui-router'
  },

  output: {
    path: DESTINATION,
    filename: 'module.js'
  }
});
