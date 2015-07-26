import React, {Component} from 'react/addons';

import styles from '../styles/biscuits.css';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Biscuits extends Component {

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="cookie--0" transitionAppear={true}>
          <span key='cookie' className='cookie cookie--0'></span>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="cookie--1" transitionAppear={true}>
          <span key='cookie' className='cookie cookie--1'></span>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="credits" transitionAppear={true}>
          <span key='credits' className='credits'></span>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="cookie--2" transitionAppear={true}>
          <span key='cookie' className='cookie cookie--2'></span>
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}
