// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flag, Heart, Mail, MessageSquare, Share } from 'react-feather';

import Button from '.';

storiesOf('Button', module).add('assortment', () => (
  <div>
    <Button>Regular button</Button>
    <Button primary>Primary button</Button>
    <Button block>Full width button</Button>
    <Button icon={<MessageSquare />} primary>
      Reply
    </Button>
    <Button icon={<Mail />}>Message</Button>
    <Button icon={<Share />}>Share</Button>
    <Button icon={<Heart />}>Thank</Button>
    <Button icon={<Flag />}>Flag</Button>
  </div>
));
