import React, {Component} from 'react';
import {Link} from 'react-router';
import dough from 'cookie-dough';

import styles from '../styles/cookies.css';

import Biscuits from '../components/biscuits';

export default class Cookies extends Component {

  static redirect() {
    const cookie = dough();
    if (!cookie.get('accept')) {
      cookie.set('accept', true);
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
          &laquo; We use cookies to ensure that we give you the best experience on our website. &raquo;
        </blockquote>
        <p className={styles.text}>
          Put the butter and sugars into a bowl and beat until creamy. Beat in the vanilla extract and egg. Sieve the flour, bicarbonate of soda and salt over the mixture and mix in with a wooden spoon. Add the chocolate chips and stir well.
        </p>
        <Link className={styles.button} to="homepage">
          Accept and download the recipe
        </Link>
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
