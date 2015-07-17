import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Pagination extends Component {

  renderPrevious() {
    let {current} = this.props;
    if (current > 1) {
      return (
        <Link to="app" params={{page: --current}}>Previous</Link>
      );
    }
    return null;
  }

  renderNext() {
    let {current, total} = this.props;
    if (current < total) {
      return (
        <Link to="app" params={{page: ++current}}>Next</Link>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderPrevious()}
        {this.renderNext()}
      </div>
    );
  }
  
}
