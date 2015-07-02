var webpack = require("webpack");
var config = require('./webpack.config');
var WebpackDevServer = require("webpack-dev-server");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath
});
server.listen(3000, "localhost", function() {
  console.log('Listening at localhost:3000');
});
