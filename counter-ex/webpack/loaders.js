const plugins = require('./plugins');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env'],
      plugins: [ [ "@babel/plugin-transform-react-jsx", { "pragma": "h" } ] ]
    },
  },
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc',
    },
  },
};
const CSSLoaderDev = {
  test: /\.css$/,
  use: [
    'style-loader',
    {loader: 'css-loader', options: {importLoaders: 1}},
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js',
        },
      },
    },
  ],
};
// const CSSLoaderDev = {
//   test: /\.css$/,
//   use: plugins.ExtractTextPlugin.extract({
//     use: [
//       {
//         loader: 'css-loader',
//         options: {importLoaders: 1},
//       },
//       {
//         loader: 'postcss-loader',
//         options: {
//           config: {
//             path: __dirname + '/postcss.config.js',
//           },
//         },
//       },
//     ],
//   }),
// };

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoaderDev: CSSLoaderDev,
};
