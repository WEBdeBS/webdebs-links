import React, {Component} from 'react';
import dough from 'cookie-dough';

import {getLinks} from '../utils/api';
import Storage from '../utils/storage';
import Link from './link';
import Pagination from './pagination';

const defaultPage = 1;

export default class Links extends Component {

  static fetchData(state) {
    return getLinks(state.params.page || defaultPage);
  }

  renderLinks() {
    const {data} = this.props.data.links;
    const storage = new Storage(dough(this.props.req));
    return data.map((item) => {
      return <Link key={item.link} item={item} storage={storage} />;
    });
  }

  render() {
    const page = this.props.state.params.page || defaultPage;
    const {total} = this.props.data.links.pagination;
    return (
      <div>
        <ul>{this.renderLinks()}</ul>
        <Pagination current={page} total={total} />
      </div>
    );
  }

}
