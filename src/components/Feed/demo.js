// @flow
import React from 'react';
import faker from 'faker';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Feed from '.';
import { color } from '../../styles';

const mockPost = () => ({
  author: { avatarUrl: faker.image.avatar(), name: faker.name.firstName() },
  body: faker.lorem.paragraph(),
  category: { name: faker.company.bsBuzz() },
  id: faker.random.uuid(),
  timestamp: faker.date.recent(),
  title: faker.company.catchPhrase(),
});

const Background = styled.div`
  background: ${color.geyser};
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

storiesOf('Feed', module)
  .addDecorator(story => (
    <Background>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>
      <Container>{story()}</Container>
    </Background>
  ))
  .add('default', () => (
    <Feed posts={[mockPost(), mockPost(), mockPost(), mockPost()]} />
  ));
