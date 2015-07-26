import React from 'react';
import {Route} from 'react-router';

import App from './app';
import Homepage from './handlers/homepage';
import Cookies from './handlers/cookies';

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="cookies" path="cookies" handler={Cookies} />
    <Route name="homepage" path=":page?" handler={Homepage} />
  </Route>
);
