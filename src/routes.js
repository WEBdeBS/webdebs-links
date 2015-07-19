import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from './app';
import Homepage from './components/homepage';

export default (
  <Route name="app" path="/:page?" handler={App}>
    <DefaultRoute name="homepage" handler={Homepage} />
  </Route>
);
