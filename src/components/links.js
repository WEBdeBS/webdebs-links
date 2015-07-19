import React, {Component} from 'react';

import Link from './link';

export default class Links extends Component {

  renderLinks() {
    const {items, storage} = this.props;
    return items.map((item) => {
      return (
        <Link key={item.link} item={item} storage={storage} />
      );
    });
  }

  render() {
    return (
      <ul>{this.renderLinks()}</ul>
    );
  }

}
