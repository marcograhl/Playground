const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  // devtool: 'cheap-module-source-map',
  // devServer: {
  //   contentBase: path.resolve(__dirname, '.'),
  //   // quiet: true,
  //   disableHostCheck: true,
  //   hot: true,
  // },

  entry: ['./src/js/index.js'],
  module: {
    rules: [loaders.JSLoader, loaders.ESLintLoader],
  },
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   filename: 'js/[name].[chunkhash].bundle.js',
  // },
  plugins: [
    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    // plugins.ExtractTextPlugin,
    plugins.StyleLintPlugin,
    // plugins.HtmlWebpackPlugin,
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
};
