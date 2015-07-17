import React, {Component} from 'react';

import {getLinks} from '../utils/api';
import Link from './link';
import Pagination from './pagination';

const defaultPage = 1;

export default class Links extends Component {

  static fetchData(state) {
    return getLinks(state.params.page || defaultPage);
  }

  renderLinks() {
    const {data} = this.props.data.links;
    return data.map((item) => <Link key={item.link} item={item} />);
  }

  render() {
    const {page} = this.props.state.params;
    const {total} = this.props.data.links.pagination;
    return (
      <div>
        <ul>{this.renderLinks()}</ul>
        <Pagination current={page || defaultPage} total={total} />
      </div>
    );
  }

}
