import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import hmr from "webpack-dev-hmr";
import express from 'express';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import React from 'react';
import Router from 'react-router';

import routes from './src/routes';
import fetchData from './src/utils/fetch-data';

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);
const path = __dirname + '/index.html';

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(cookieParser());

app.get('*', (req, res) => {
  Router.run(routes, req.url, (Root, state) => {
    fetchData(state).then((data) => {
      const props = {data, state, req};
      const html = React.renderToString(<Root {...props} />);
      let template = fs.readFileSync(path).toString();
      template = template.replace('__HTML__', html);
      template = template.replace('__DATA__', JSON.stringify(data));
      res.send(template);
    });
  });
});

const server = app.listen(3000, 'localhost', () => {
  hmr.listen(server, compiler);
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
