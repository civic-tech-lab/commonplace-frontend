// @flow
import FaHeartO from 'react-icons/lib/fa/heart-o';
import React from 'react';
import { storiesOf } from '@storybook/react';

import NavItem from '.';

storiesOf('Sidebar/NavItem', module)
  .add('filter', () => (
    <NavItem icon={<FaHeartO />} type="filter">
      Announcements
    </NavItem>
  ))
  .add('group', () => (
    <NavItem icon={<FaHeartO />} type="group">
      Announcements
    </NavItem>
  ))
  .add('primary', () => (
    <NavItem icon={<FaHeartO />} primary>
      Announcements
    </NavItem>
  ));
