var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    './src/client'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel?stage=0']
    }]
  }
};
