// @flow
import React from 'react';
import styled from 'styled-components';
import { addDecorator, configure } from '@storybook/react';

import { color } from '../src/styles';

function loadStories() {
  require('../src/components/App/demo.js');
  require('../src/components/Avatar/demo.js');
  require('../src/components/Button/demo.js');
  require('../src/components/Feed/demo.js');
  require('../src/components/Footer/demo.js');
  require('../src/components/Header/demo.js');
  require('../src/components/Logo/demo.js');
  require('../src/components/Main/demo.js');
  require('../src/components/Post/demo.js');
  require('../src/components/Sidebar/demo.js');
  require('../src/components/Sidebar/NavItem/demo.js');
  // You can require as many stories as you need.
}

addDecorator(story => (
  <div>
    <style>{`
      body {
        margin: 0;
      }
    `}</style>
    {story()}
  </div>
));

configure(loadStories, module);
