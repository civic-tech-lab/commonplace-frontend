// @flow
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Sidebar from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

storiesOf('Sidebar', module)
  .addDecorator(story => (
    <Container>
      <style>{`
        body: {
          margin: 0;
        }
      `}</style>
      {story()}
    </Container>
  ))
  .add('default', () => <Sidebar />);
