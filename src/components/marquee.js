import React, {Component} from 'react';

import styles from '../styles/marquee.css';

export default class Marquee extends Component {

  shouldComponentUpdate() {
    return false;
  }

  getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const delay = this.getRandomIntInclusive(60, 300);
    const outerDirection = this.getRandomIntInclusive(0, 1) ? 'up' : 'down';
    const innerDirection = this.getRandomIntInclusive(0, 1) ? 'right' : 'left';
    const {text} = this.props;
    const marquee = `
      <marquee
        class="${styles.marquee}"
        scrolldelay="${delay}"
        direction="${outerDirection}"
        behavior="alternate">
          <marquee
            scrolldelay="${delay}"
            direction="${innerDirection}"
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
