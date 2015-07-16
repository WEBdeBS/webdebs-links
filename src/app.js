import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>WEBdeBS</h1>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
