// @flow
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Header from '.';

storiesOf('Header', module).add('default', () => (
  <MemoryRouter>
    <Header town="Falls Church" />
  </MemoryRouter>
));
