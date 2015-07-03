import React from 'react';
import Router from 'react-router';
import when from 'when';

import routes from './routes';

Router.run(routes, Router.HashLocation, (Root, state) => {
  when.all(state.routes.filter((route) => {
    return route.handler.fetchData;
  }).map((route) => {
    return route.handler.fetchData();
  })).then((data) => {
    React.render(<Root data={data}/>, document.body);
  });
});
