// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Avatar from '.';

storiesOf('Avatar', module).add('default', () => (
  <Avatar src={faker.image.avatar()} />
));
