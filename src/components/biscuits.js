import React, {Component} from 'react/addons';

import styles from '../styles/biscuits.css';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Biscuits extends Component {

  constructor() {
    super();
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  render() {
    let cookie0 = null;
    let cookie1 = null;
    let credits = null;
    let cookie2 = null;
    if (this.state.mounted) {
      cookie0 = <span key='cookie' className='cookie cookie--0'></span>;
      cookie1 = <span key='cookie' className='cookie cookie--1'></span>;
      credits = <span key='credits' className='credits'></span>;
      cookie2 = <span key='cookie' className='cookie cookie--2'></span>;
    }
    return (
      <div className={styles.biscuits}>
        <ReactCSSTransitionGroup transitionName="cookie--0">
          {cookie0}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="cookie--1">
          {cookie1}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="credits">
          {credits}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="cookie--2">
          {cookie2}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}
