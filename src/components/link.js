import React, {Component} from 'react';
import moment from 'moment';

export default class Link extends Component {

  formatDate(date) {
    return moment(date).fromNow();
  }

  render() {
    const {item} = this.props;
    return (
      <li>
        <div>{this.formatDate(item.date)} - {item.postedBy}</div>
        <a href={item.link}>{item.link}</a>
        <div>#{item.room}</div>
      </li>
    );
  }
  
}
