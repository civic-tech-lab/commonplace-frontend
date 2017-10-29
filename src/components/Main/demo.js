// @flow
import React from 'react';
import faker from 'faker';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Main from '.';

const mockPost = () => ({
  author: { avatarUrl: faker.image.avatar(), name: faker.name.firstName() },
  body: faker.lorem.paragraph(),
  category: { name: faker.company.bsBuzz() },
  id: faker.random.uuid(),
  timestamp: faker.date.recent(),
  title: faker.company.catchPhrase(),
});

storiesOf('Main', module).add('default', () => (
  <MemoryRouter>
    <Main
      town="Falls Church"
      posts={[mockPost(), mockPost(), mockPost(), mockPost()]}
    />
  </MemoryRouter>
));
