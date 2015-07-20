import React, {Component} from 'react';
import dough from 'cookie-dough';

import {getLinks} from '../utils/api';
import Storage from '../utils/storage';
import Header from './header';
import Links from './links';
import Pagination from './pagination';

import styles from '../styles/homepage.css';

const defaultPage = 1;

export default class Homepage extends Component {

  static fetchData(state) {
    return getLinks(state.params.page || defaultPage);
  }

  render() {
    const {data, pagination} = this.props.data.homepage;
    const storage = new Storage(dough(this.props.req));
    const page = this.props.state.params.page || defaultPage;
    return (
      <div className={styles.homepage}>
        <Header />
        <Links items={data} storage={storage} />
        <Pagination current={page} total={pagination.total} />
        <div className={styles.frame}></div>
      </div>
    );
  }

}
