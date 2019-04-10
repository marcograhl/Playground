const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config');
const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    // quiet: true,
    // publicPath: '/src/js',
    hot: true,
    open: true,
    disableHostCheck: true,
    inline: true,
    watchContentBase: true,
    compress: true,
    logLevel: 'debug',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'ui',
    umdNamedDefine: true,
  libraryExport: 'default'
  },
  module: {
    rules: [loaders.JSLoader, loaders.ESLintLoader, loaders.CSSLoaderDev],
  },

  // target: "node", // <- NOT "web"
  plugins: [
    plugins.StyleLintPlugin,
    plugins.HtmlWebpackPlugin,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
