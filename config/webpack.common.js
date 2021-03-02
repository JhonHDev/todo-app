const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: true,
          minimize: false,
        },
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ['file-loader?name=assets/images/[name].[contenthash].[ext]'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo App',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images/[name].[contenthash].[ext]',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
