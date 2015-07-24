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

  renderMarquee1() {
    const marquee = `
      <marquee class=${styles.marquee} direction="down" behavior="alternate">
        <marquee behavior="alternate">#OLD</marquee>
      </marquee>
    `;
    return (
      <div dangerouslySetInnerHTML={{__html:marquee}}></div>
    );
  }

  renderMarquee2() {
    const marquee =  `
      <marquee class=${styles.marquee} scrolldelay="200" direction="up" behavior="alternate">
        <marquee scrolldelay="200" behavior="alternate">Spiedo</marquee>
      </marquee>
    `;
    return (
      <div dangerouslySetInnerHTML={{__html:marquee}}></div>
    );
  }

  render() {
    const {data, pagination} = this.props.data.homepage;
    const storage = new Storage(dough(this.props.req));
    const page = parseInt(this.props.state.params.page) || defaultPage;
    return (
      <div className={styles.homepage}>
        <Header />
        <Links items={data} storage={storage} />
        <Pagination current={page} total={pagination.total} />
        <div className={styles.frame}></div>
        {this.renderMarquee1()}
        {this.renderMarquee2()}
      </div>
    );
  }

}

Homepage.propTypes = {
  data: React.PropTypes.object.isRequired,
  state: React.PropTypes.object.isRequired,
  req: React.PropTypes.object
};
