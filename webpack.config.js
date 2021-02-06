const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'dist' ),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: true,
          minimize: false
        }
      },
      {
        test: /\.scss$/i,
        use: [ 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ['file-loader?name=assets/images/[name].[hash].[ext]'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images/[name].[hash].[ext]'
        }
      ]
    })
  ]
}