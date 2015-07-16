import React, {Component} from 'react';

import {getLinks} from '../utils/api';

export default class Repos extends Component {
  static fetchData(state) {
    return getLinks(state.params.page);
  }
  renderLinks() {
    const {data} = this.props.data.links;
    return data.map((item) => {
      return (
        <li key={item.link}>
          <a href={item.link}>
            {item.link}
          </a>
        </li>
      );
    });
  }
  render() {
    return (
      <ul>{this.renderLinks()}</ul>
    );
  }
}
