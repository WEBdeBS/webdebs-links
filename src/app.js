import React, {Component} from 'react';
import {Link, RouteHandler} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>GitHub</h1>
        <Link to='repos'>Repos</Link>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}
