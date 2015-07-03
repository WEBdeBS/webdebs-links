import React, {Component} from 'react';
import {Link} from 'react-router';

import {getRepos} from '../utils/api';

export default class Repos extends Component {
  static fetchData() {
    return getRepos();
  }
  renderRepos() {
    const repos = this.props.data[0];
    return Object.keys(repos).map((key) => {
      const repo = repos[key];
      return (
        <li key={repo.id}>
          <Link to={`/repo/${repo.name}`}>
            {repo.name}
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <ul>{this.renderRepos()}</ul>
    );
  }
}
