import React, {Component} from 'react';
import moment from 'moment';
import dough from 'cookie-dough';

import Storage from '../utils/storage';

export default class Link extends Component {

  constructor() {
    super();
    this.storage = new Storage(dough());
    this.handleClick = this.handleClick.bind(this);
  }

  formatDate(date) {
    return moment(date).fromNow();
  }

  handleClick() {
    const {item} = this.props;
    this.storage.add(item.link);
  }

  getStyle() {
    const {item} = this.props;
    if (this.storage.contains(item.link)) {
      return {
        textDecoration: 'line-through'
      };
    }
    return null;
  }

  render() {
    const {item} = this.props;
    return (
      <li style={this.getStyle()}>
        <div>{this.formatDate(item.date)} - {item.postedBy}</div>
        <a href={item.link} onClick={this.handleClick}>{item.link}</a>
        <div>#{item.room}</div>
      </li>
    );
  }
  
}
