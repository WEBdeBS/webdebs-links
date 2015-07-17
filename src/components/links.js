import React, {Component} from 'react';
import moment from 'moment';

import {getLinks} from '../utils/api';
import Pagination from './pagination';

const defaultPage = 1;

export default class Links extends Component {
  static fetchData(state) {
    return getLinks(state.params.page || defaultPage);
  }
  formatDate(date) {
    return moment(date).fromNow();
  }
  renderLinks() {
    const {data} = this.props.data.links;
    return data.map((item) => {
      return (
        <li key={item.link}>
          <div>{this.formatDate(item.date)} - {item.postedBy}</div>
          <a href={item.link}>{item.link}</a>
          <div>#{item.room}</div>
        </li>
      );
    });
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
