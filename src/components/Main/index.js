// @flow
import React from 'react';
import styled from 'styled-components';

import Feed, { type PostData } from '../Feed';
import { Header, Sidebar } from '../';
import { color } from '../../styles';

type Props = {|
  posts: PostData[],
  town: string,
|};

const Wrapper = styled.div`
  background-color: ${color.geyser};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-basis: 0;
  flex-grow: 1;
  min-height: 0;
`;

const Left = styled.div`
  flex-shrink: 0;
  width: 220px;
  overflow: auto;
  max-height: 100%;
`;

const Right = styled.div`
  flex-grow: 1;
  overflow: auto;
  max-height: 100%;
`;

const Main = ({ posts, town }: Props) => (
  <Wrapper>
    <Header town={town} />
    <Row>
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <Feed posts={posts} />
      </Right>
    </Row>
  </Wrapper>
);

export default Main;
