const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge( commonConfig, {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve( __dirname, '../dist' ),
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      minSize: 20000,
      chunks: 'all',
      name: 'commons',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        }
      }
    }
  }
});