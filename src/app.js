import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import styles from './styles/app.css';

export default class App extends Component {

  render() {
    return (
      <RouteHandler {...this.props} />
    );
  }

}
