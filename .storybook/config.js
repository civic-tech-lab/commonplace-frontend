// @flow
import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/App/demo.js');
  require('../src/components/Avatar/demo.js');
  require('../src/components/Button/demo.js');
  require('../src/components/Footer/demo.js');
  require('../src/components/Header/demo.js');
  require('../src/components/Main/demo.js');
  require('../src/components/Post/demo.js');
  require('../src/components/Sidebar/demo.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
