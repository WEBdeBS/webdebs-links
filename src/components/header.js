import React, {Component} from 'react';

import styles from '../styles/header.css';

export default class Header extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <a className={styles.header} href="/"></a>
    );
  }

}
