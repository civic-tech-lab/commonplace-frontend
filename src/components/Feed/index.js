// @flow
import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Post from '../Post';

export type PostData = {|
  author: {|
    name: string,
    avatarUrl: string,
  |},
  body: string,
  category: {|
    name: string,
  |},
  id: string,
  timestamp: Date,
  title: string,
|};

type Props = {|
  posts: PostData[],
|};

const GUTTER_SMALL = 20;
const GUTTER_LARGE = 40;

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  align-items: top;
  display: flex;
  flex-direction: row;
  padding: ${GUTTER_SMALL / 2}px ${GUTTER_LARGE}px;
`;

const Spacer = styled.div`
  flex-shrink: 0;
  width: ${GUTTER_SMALL}px;
`;

const Feed = ({ posts = [] }: Props) => (
  <Container>
    {posts.map(({ author, body, category, id, timestamp, title }: PostData) => (
      <Row key={id}>
        <Avatar src={author.avatarUrl} />
        <Spacer />
        <Post
          author={author}
          body={body}
          category={category}
          timestamp={timestamp}
          title={title}
        />
      </Row>
    ))}
  </Container>
);

export default Feed;
