import React from 'react';
import Router from 'react-router';
import when from 'when';

import routes from './routes';

let first = true;

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  if (first) {
    first = false;
    React.render(<Root data={window.DATA}/>, document.body);
  } else {
    when.all(state.routes.filter((route) => {
      return route.handler.fetchData;
    }).map((route) => {
      return route.handler.fetchData(state);
    })).then((data) => {
      React.render(<Root data={data}/>, document.body);
    });
  }
});
