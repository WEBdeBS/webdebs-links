import React from 'react';
import Router from 'react-router';

import routes from './routes';
import fetchData from './utils/fetch-data';

let first = true;

const rehydrate = () => {
  const data = window.DATA;
  delete window.DATA;
  return data;
};

const render = (Root, state, data) => {
  React.render(<Root data={data} state={state} />, document.getElementById('app'));
};

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  if (first) {
    first = false;
    render(Root, state, rehydrate());
  } else {
    fetchData(state).then((data) => {
      render(Root, state, data);
    });
  }
});
