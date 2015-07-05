import when from 'when';

export default (state) => {
  return when.all(state.routes.filter((route) => {
    return route.handler.fetchData;
  }).map((route) => {
    return route.handler.fetchData(state);
  }));
}
