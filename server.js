import express from 'express';
import webpack from 'webpack';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import React from 'react';
import Router from 'react-router';

import config from './webpack/development.config';
import routes from './dist/routes';
import fetchData from './src/utils/fetch-data';

const app = express();
const compiler = webpack(config);
const path = __dirname + '/index.html';
const isProduction = process.env.NODE_ENV === 'production';

const template = fs.readFileSync(path, {encoding: 'utf8'});

app.use(cookieParser());

if (isProduction) {
  app.use(express.static('dist'));
} else {
  const webpackMiddleware = require('webpack-dev-middleware');
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
}

app.get('*', (req, res) => {
  Router.run(routes, req.url, (Root, state) => {
    fetchData(state).then((data) => {
      const props = {data, state, req};
      const html = React.renderToString(<Root {...props} />);
      let content = template.replace('__HTML__', html);
      content = content.replace('__DATA__', JSON.stringify(data));
      res.send(content);
    });
  });
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const server = app.listen(port, host, () => {
  if (!isProduction) {
    const hmr = require('webpack-dev-hmr');
    hmr.listen(server, compiler);
  }
  console.log('Listening at http://%s:%s', host, port);
});
