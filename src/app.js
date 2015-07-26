import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import styles from './styles/app.css';

import Header from './components/header';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.content}>
          <RouteHandler {...this.props} />
        </div>
        <div className={styles.frame}></div>
      </div>
    );
  }

}
