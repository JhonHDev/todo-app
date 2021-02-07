const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge( commonConfig, {
  mode: 'development',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, '../dist' ),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: true,
    port: 8080,
  },
});