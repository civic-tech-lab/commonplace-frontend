// @flow
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { color } from '../../styles';

import Post from '.';

const Background = styled.div`
  background: ${color.geyser};
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

storiesOf('Post', module)
  .addDecorator(story => (
    <Background>
      <Container>{story()}</Container>
    </Background>
  ))
  .add('with no replies', () => (
    <Post
      author={{ name: 'Cara Brunk' }}
      body="The Care Clinic at 1213 N. 3rd has a request for size 18-24 month winter coat for a boy. Another boy of the same age is in need of snowpants. If you’d like to donate new or used, please drop them off or call me at 360-5279. Thank you, Mary Jane Lynch, Volunteer (Size 4 &amp; 5 diapers are needed also)"
      category={{ name: 'Questions' }}
      timestamp={new Date()}
      title="Parents need a little help!"
    />
  ))
  .add('with replies', () => (
    <Post
      author={{ name: 'Alice' }}
      body="I am caring for an older black lab for a while. What are the local dog friendly parks in the area?"
      category={{ name: 'Questions' }}
      timestamp={new Date()}
      title="Dog friendly parks"
    />
  ));
