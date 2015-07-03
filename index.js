var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
var hmr = require("webpack-dev-hmr");
var express = require('express');

var app = express();
var config = require('./webpack.config');
var compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000, 'localhost', function() {
  hmr.listen(server, compiler);
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
