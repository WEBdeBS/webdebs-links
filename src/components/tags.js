import React, {Component} from 'react';

import styles from '../styles/tags.css';

export default class Tags extends Component {

  renderTags() {
    const {tags, room} = this.props.item;
    const hashtags = [`#${room}`];
    hashtags.push.apply(hashtags, tags);
    return hashtags.map((hashtag, index) => {
      return (
        <span key={index} className={styles.tag}>{hashtag}</span>
      );
    });
  }

  render() {
    return (
      <div className={styles.tags}>{this.renderTags()}</div>
    );
  }

}

Tags.propTypes = {
  item: React.PropTypes.object.isRequired
};
