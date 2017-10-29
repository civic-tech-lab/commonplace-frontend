// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from '.';

storiesOf('Logo', module)
  .add('Falls Church', () => <Logo town="Falls Church" />)
  .add('Manhattan Beach', () => <Logo town="Manhattan Beach" />);
