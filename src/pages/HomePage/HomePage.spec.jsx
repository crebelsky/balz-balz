import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from './index';

describe('HomePage', () => {
  it('should render', () => {
    const renderedValue = renderer.create(<HomePage />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
