// @flow
import FaCommentingO from 'react-icons/lib/fa/commenting-o';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaExclamationTriangle from 'react-icons/lib/fa/exclamation-triangle';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaShareSquareO from 'react-icons/lib/fa/share-square-o';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import { color, font, transition } from '../../styles';

type Props = {|
  author: {
    name: string,
  },
  body: string,
  category: {|
    name: string,
  |},
  timestamp: Date,
  title: string,
|};

const GUTTER_SIZE = 7;

const Body = styled.p`
  color: ${color.trout};
  font-family: ${font.family.body};
  font-size: ${font.size.medium}px;
  margin: 0;
`;

const Byline = styled.p`
  color: ${color.casper};
  font-family: ${font.family.body};
  font-size: ${font.size.medium}px;
  margin: 0;
`;

const Card = styled.div`
  background: white;
  border-top: 3px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  flex-grow: 1;
  padding: 13px;
  transition: border ${transition};

  :hover {
    border-color: ${color.cinnabar};
  }
`;

const Row = styled.div`padding: ${GUTTER_SIZE}px;`;

const Title = styled.h1`
  color: ${color.trout};
  font-family: ${font.family.heading};
  font-size: ${font.size.large}px;
  font-weight: ${font.weight.normal};
  margin: 0;
`;

const Post = ({ author, body, category, timestamp, title }: Props) => (
  <Card>
    <Row>
      <Title>{title}</Title>
    </Row>
    <Row>
      <Body>{body}</Body>
    </Row>
    <Row>
      <Byline>
        {author.name} posted on {timestamp.toLocaleDateString()} in{' '}
        {category.name}
      </Byline>
    </Row>
    <div>
      <Button icon={<FaCommentingO />} primary>
        Reply
      </Button>
      <Button icon={<FaEnvelopeO />}>Message</Button>
      <Button icon={<FaShareSquareO />}>Share</Button>
      <Button icon={<FaHeartO />}>Thank</Button>
      <Button icon={<FaExclamationTriangle />}>Flag</Button>
    </div>
  </Card>
);

export default Post;
