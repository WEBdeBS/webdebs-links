import {all} from 'when/keys';

export default (state) => {
  return all(state.routes.filter((route) => {
    return route.handler.fetchData;
  }).reduce((promises, route) => {
    promises[route.name] = route.handler.fetchData(state);
    return promises;
  }, {}));
};
