import React, {Component} from 'react';

import styles from '../styles/header.css';

export default class Header extends Component {

  render() {
    return (
      <a className={styles.header} href="/"></a>
    );
  }

}
