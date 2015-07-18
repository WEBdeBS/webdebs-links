var webpack = require("webpack");

module.exports = {
  entry: [
    './src/client'
  ],
  output: {
    path: __dirname + '/dist',
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
