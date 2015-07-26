import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from '../styles/header.css';

export default class Header extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <header className={styles.header}>
        <Link className={styles.logo} to="homepage"></Link>
      </header>
    );
  }

}
