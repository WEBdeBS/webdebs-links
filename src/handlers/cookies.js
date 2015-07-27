import React, {Component} from 'react';
import dough from 'cookie-dough';

import styles from '../styles/cookies.css';

import Biscuits from '../components/biscuits';

export default class Cookies extends Component {

  static redirect() {
    const cookie = dough();
    if (!cookie.get('accept')) {
      cookie.set('accept', true)
      location.href = '/cookies';
    }
  }

  render() {
    return (
      <article className={styles.cookies}>
        <header>
          <h1 className={styles.title}>Cookies</h1>
        </header>
        <blockquote className={styles.quote}>
          &laquo; Mauris sollicitudin, felis sed suscipit vehicula, leo erat placerat est, in varius est arcu sit amet lectus. &raquo;
        </blockquote>
        <p className={styles.text}>
          Nunc tempus magna lorem, sollicitudin dictum dui sodales et. Vestibulum malesuada libero est, eu pretium odio elementum a. Nulla malesuada fermentum nulla accumsan aliquam. Ut vitae ipsum finibus, scelerisque nisi ac, iaculis ante. Aliquam tellus enim, convallis id odio ut, placerat malesuada sapien.
        </p>
        <a className={styles.button} href="#">
          Accept and download the recipe
        </a>
        <Biscuits />
      </article>
    );
  }

}

Cookies.propTypes = {
  data: React.PropTypes.object.isRequired,
  state: React.PropTypes.object.isRequired,
  req: React.PropTypes.object
};
