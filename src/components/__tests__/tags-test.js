jest.dontMock('../tags');

import React from 'react/addons';
const Tags = require('../tags');
const TestUtils = React.addons.TestUtils;

const item = {
  room: 'room'
};

describe('Tags', () => {

  it('concatenates and shows tags with room', () => {
    item.tags = ['#tag0', '#tag1'];
    const tags = TestUtils.renderIntoDocument(<Tags item={item} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(tags, 'div');
    expect(parent.getDOMNode().textContent).toEqual('#room#tag0#tag1');
  });

  it('shows only room if tags is null', () => {
    item.tags = null;
    const tags = TestUtils.renderIntoDocument(<Tags item={item} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(tags, 'div');
    expect(parent.getDOMNode().textContent).toEqual('#room');
  });

});
