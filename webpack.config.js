const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('babel-template');

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./src"),
    filename: "[name]-[contentHash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: []
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}