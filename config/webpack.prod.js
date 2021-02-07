const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge( commonConfig, {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve( __dirname, '../dist' ),
  },
});