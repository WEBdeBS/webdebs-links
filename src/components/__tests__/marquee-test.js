jest.dontMock('../marquee');

import React from 'react/addons';
const Marquee = require('../marquee');
const TestUtils = React.addons.TestUtils;

const text = 'text';

describe('Marquee', () => {

  it('shows the right text', () => {
    const marquee = TestUtils.renderIntoDocument(<Marquee text={text} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(marquee, 'div');
    expect(parent.getDOMNode().textContent.trim()).toEqual(text);
  });

});
