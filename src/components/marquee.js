import React, {Component} from 'react';

import styles from '../styles/marquee.css';

export default class Marquee extends Component {

  getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const direction = this.getRandomIntInclusive(0, 1) ? 'up' : 'down';
    const delay = this.getRandomIntInclusive(60, 300);
    const {text} = this.props;
    const marquee = `
      <marquee
        class="${styles.marquee}"
        scrolldelay="${delay}"
        direction="${direction}"
        behavior="alternate">
          <marquee
            scrolldelay="${delay}"
            behavior="alternate">
              ${text}
          </marquee>
      </marquee>
    `;
    return (
      <div dangerouslySetInnerHTML={{__html: marquee}}></div>
    );
  }

}

Marquee.propTypes = {
  text: React.PropTypes.string.isRequired
};
