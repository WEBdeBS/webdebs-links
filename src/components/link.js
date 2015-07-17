import React, {Component} from 'react';
import moment from 'moment';

export default class Link extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  formatDate(date) {
    return moment(date).fromNow();
  }

  handleClick() {
    const {storage, item} = this.props;
    storage.add(item.link);
  }

  getStyle() {
    const {storage, item} = this.props;
    if (storage.contains(item.link)) {
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
