import React, {Component} from 'react';
import dough from 'cookie-dough';

import styles from '../styles/cookies.css';

export default class Cookies extends Component {

  render() {
    return (
      <div className={styles.cookies}>
        Cookies
      </div>
    );
  }

}

Cookies.propTypes = {
  data: React.PropTypes.object.isRequired,
  state: React.PropTypes.object.isRequired,
  req: React.PropTypes.object
};
