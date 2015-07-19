var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: [
    './src/client'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel?stage=0']
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css?modules!postcss')
    }, {
      test: /\.png$/,
      loaders: ['file']
    }]
  },
  postcss: [autoprefixer()]
};
