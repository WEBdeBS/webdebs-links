import React, {Component} from 'react';

export default ReactRouterContext = (Element) => {

  class RouterStub {}

  RouterStub.makePath = () => {};
  RouterStub.makeHref = () => {};
  RouterStub.transitionTo = () => {};
  RouterStub.replaceWith = () => {};
  RouterStub.goBack = () => {};
  RouterStub.getCurrentPath = () => {};
  RouterStub.getCurrentRoutes = () => {};
  RouterStub.getCurrentPathname = () => {};
  RouterStub.getCurrentParams = () => {};
  RouterStub.getCurrentQuery = () => {};
  RouterStub.isActive = () => {};
  RouterStub.getRouteAtDepth = () => {};
  RouterStub.setRouteComponentAtDepth = () => {};

  class StubbedComponent extends Component {
    getChildContext() {
      return {
        router: RouterStub,
        routeDepth: 0
      };
    }
    render() {
      return <Element {...this.props} />;
    }
  }

  StubbedComponent.childContextTypes = {
    router: React.PropTypes.func,
    routeDepth: React.PropTypes.number
  };

  return StubbedComponent;

};
