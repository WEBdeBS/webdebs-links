import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import hmr from "webpack-dev-hmr";
import express from 'express';
import fs from 'fs';
import Router from 'react-router';
import when from 'when';

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);
const routes = require('./src/routes');
const path = __dirname + '/index.html';

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
  Router.run(routes, req.url, (Root, state) => {
    when.all(state.routes.filter((route) => {
      return route.handler.fetchData;
    }).map((route) => {
      return route.handler.fetchData(state);
    })).then((data) => {
      let html = fs.readFileSync(path).toString();
      html = html.replace('{DATA}', JSON.stringify(data));
      res.send(html);
    });
  });
});

const server = app.listen(3000, 'localhost', () => {
  hmr.listen(server, compiler);
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
