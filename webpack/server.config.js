var webpack = require("webpack");
var path = require("path");
var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: [
    './src/routes'
  ],
  target: 'node',
  externals: /^[a-z][a-z\.\-0-9]*$/,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'routes.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel?stage=0']
    }, {
      test: /\.css$/,
      loaders: ['css/locals?modules', 'postcss']
    }]
  },
  postcss: [autoprefixer()]
};
