// in __mocks__/
import React from 'react';

const mockComponent = name => props =>
// eslint-disable-next-line react/prop-types
  React.createElement(name, props, props.children);

export default mockComponent('MockedLink');
