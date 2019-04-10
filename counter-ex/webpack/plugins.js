const path = require('path');
const webpack = require('webpack');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = new _ExtractTextPlugin({
  filename: '[name].[chunkhash].bundle.css',
  disable: false,
  allChunks: true,
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/css'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
});

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/index.html',
  filename: 'index.html',
});

module.exports = {
  ExtractTextPlugin: ExtractTextPlugin,
  StyleLintPlugin: StyleLintPlugin,
  HtmlWebpackPlugin: HtmlWebpackPlugin,
};
