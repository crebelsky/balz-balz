/**
 * Config file for storybook
 */

import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

// Include any global CSS (standard CSS, not CSS Modules)

setOptions({
  name: 'Example',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
});

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// Wrap all stories in decorator
addDecorator(story => (
  <MemoryRouter>
    {story()}
  </MemoryRouter>
));

configure(loadStories, module);
