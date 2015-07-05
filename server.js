import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import hmr from "webpack-dev-hmr";
import express from 'express';
import fs from 'fs';
import Router from 'react-router';

import routes from './src/routes';
import fetchData from './src/utils/fetchData';

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);
const path = __dirname + '/index.html';

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
  Router.run(routes, req.url, (Root, state) => {
    fetchData(state).then((data) => {
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
