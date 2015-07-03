import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Repos from './components/Repos';
import Repo from './components/Repo';

export default (
  <Route handler={App}>
    <Route path='repos' handler={Repos} />
    <Route path='repo' handler={Repo} />
  </Route>
);
