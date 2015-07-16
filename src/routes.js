import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from './App';
import Links from './components/links';

export default (
  <Route name="app" path="/:page?" handler={App}>
    <DefaultRoute name="links" handler={Links} />
  </Route>
);
