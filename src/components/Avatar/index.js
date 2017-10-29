// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {|
  src: string,
|};

const IMAGE_SIZE = 90;
const BORDER_WIDTH = 5;

const Container = styled.div`
  border: solid ${BORDER_WIDTH}px white;
  box-sizing: border-box;
  flex-shrink: 0;
  height: ${IMAGE_SIZE}px;
  width: ${IMAGE_SIZE}px;
`;

const Image = styled.img`max-width: 100%;`;

const Avatar = ({ src }: Props) => (
  <Container>
    <Image src={src} />
  </Container>
);

export default Avatar;
