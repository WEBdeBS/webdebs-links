import React from 'react';
import Router from 'react-router';

import routes from './routes';
import fetchData from './utils/fetchData';

let first = true;

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  if (first) {
    first = false;
    const data = window.DATA;
    delete window.DATA;
    React.render(<Root data={data}/>, document.body);
  } else {
    fetchData(state).then((data) => {
      React.render(<Root data={data}/>, document.body);
    });
  }
});
