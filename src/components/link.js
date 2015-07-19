import React, {Component} from 'react';
import moment from 'moment';

import styles from '../styles/link.css';

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
      <li className={styles.link} style={this.getStyle()}>
        <div className={styles.meta}>{this.formatDate(item.date)} - {item.postedBy}</div>
        <a className={styles.url} href={item.link} onClick={this.handleClick}>{item.link}</a>
        <div className={styles.tags}>#{item.room}</div>
      </li>
    );
  }

}
