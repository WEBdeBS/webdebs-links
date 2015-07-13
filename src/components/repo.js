import React, {Component} from 'react';

import {getRepo} from '../utils/api';

export default class Repo extends Component {
  static fetchData(state) {
    return getRepo(state.params.repo);
  }
  render() {
    const {repo} = this.props.data;
    return (
      <div>
        <h1>{repo.name}</h1>
        <h2>{repo.stargazers_count}</h2>
      </div>
    );
  }
}
