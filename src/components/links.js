import React, {Component} from 'react';

import styles from '../styles/links.css';

import Link from './link';

export default class Links extends Component {

  renderLinks() {
    const {items, storage} = this.props;
    return items.map((item, index) => {
      return (
        <Link key={index} item={item} storage={storage} />
      );
    });
  }

  render() {
    return (
      <ul className={styles.links}>
        {this.renderLinks()}
      </ul>
    );
  }

}

Links.propTypes = {
  items: React.PropTypes.array.isRequired,
  storage: React.PropTypes.object.isRequired
};
