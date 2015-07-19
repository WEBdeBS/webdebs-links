var webpack = require("webpack");
var path = require("path");
var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['react-hot', 'babel?stage=0']
    }, {
      test: /\.css$/,
      loaders: ['style?singleton', 'css?modules', 'postcss']
    }, {
      test: /\.png$/,
      loaders: ['file']
    }]
  },
  postcss: [autoprefixer()]
};
