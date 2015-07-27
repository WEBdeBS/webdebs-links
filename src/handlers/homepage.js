import React, {Component} from 'react';
import dough from 'cookie-dough';

import {getLinks} from '../utils/api';
import Storage from '../utils/storage';
import Links from '../components/links';
import Pagination from '../components/pagination';
import Marquee from '../components/marquee';
import Cookies from './cookies';

const defaultPage = 1;

export default class Homepage extends Component {

  static fetchData(state) {
    return getLinks(state.params.page || defaultPage);
  }

  componentDidMount() {
    Cookies.redirect();
  }

  render() {
    const {data, pagination} = this.props.data.homepage;
    const storage = new Storage(dough(this.props.req));
    const page = parseInt(this.props.state.params.page) || defaultPage;
    return (
      <div>
        <Links items={data} storage={storage} />
        <Pagination current={page} total={pagination.total} />
        <Marquee text="#old" />
        <Marquee text="spiedo" />
        <Marquee text="pota" />
        <Marquee text="@cirpo" />
        <Marquee text="java" />
      </div>
    );
  }

}

Homepage.propTypes = {
  data: React.PropTypes.object.isRequired,
  state: React.PropTypes.object.isRequired,
  req: React.PropTypes.object
};
