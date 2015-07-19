jest.dontMock('moment');
jest.dontMock('../link');

import React from 'react/addons';
const Link = require('../link');
const TestUtils = React.addons.TestUtils;

const item = {
  date: 1234567890,
  postedBy: 'user',
  link: 'link',
  room: 'room'
};

describe('Link', () => {

  it('shows a crossed out link if viewed', () => {
    const storage = {
      contains: () => true
    };
    const link = TestUtils.renderIntoDocument(<Link item={item} storage={storage} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(link, 'li');
    expect(parent.getDOMNode().style['text-decoration']).toEqual('line-through');
  });

  it('show a non-crossed out link if now viewed', () => {
    const storage = {
      contains: () => false
    };
    const link = TestUtils.renderIntoDocument(<Link item={item} storage={storage} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(link, 'li');
    expect(parent.getDOMNode().style['text-decoration']).toEqual('');
  });

});
