import React from 'react';
import Router from 'react-router';

import routes from './routes';
import fetchData from './utils/fetchData';

let first = true;

const render = (Root, data) => {
  React.render(<Root data={data}/>, document.body);
};

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  if (first) {
    first = false;
    const data = window.DATA;
    delete window.DATA;
    render(Root, data);
  } else {
    fetchData(state).then((data) => {
      render(Root, data);
    });
  }
});
