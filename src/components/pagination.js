import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from '../styles/pagination.css';

export default class Pagination extends Component {

  renderPrevious() {
    let {current} = this.props;
    if (current > 1) {
      return (
        <Link to="app" params={{page: --current}}>&laquo;</Link>
      );
    }
    return null;
  }

  renderNext() {
    let {current, total} = this.props;
    if (current < total) {
      return (
        <Link to="app" params={{page: ++current}}>&raquo;</Link>
      );
    }
    return null;
  }

  render() {
    return (
      <div className={styles.pagination}>
        {this.renderPrevious()}
        {this.renderNext()}
      </div>
    );
  }

}

Pagination.propTypes = {
  current: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};
