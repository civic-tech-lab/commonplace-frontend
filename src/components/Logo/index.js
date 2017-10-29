// @flow
import React from 'react';
import styled from 'styled-components';

import logoSvg from './cp-acorn.svg';
import { color, font } from '../../styles';

type Props = {|
  town: string,
|};

const Icon = styled.img`margin-right: 20px;`;

const Root = styled.div`
  flex-shrink: 0;
  padding: 10px 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  color: ${color.pickledBluewood};
  font-size: ${font.size.large}px;
  line-height: 1.25;
  margin: 0;
`;

const TownName = styled.h2`
  color: ${color.cinnabar};
  font-size: ${font.size.medium}px;
  line-height: 1.25;
  margin: 0;
`;

const Logo = ({ town }: Props) => (
  <Root>
    <Row>
      <Icon src={logoSvg} />
      <div>
        <Title>CommonPlace</Title>
        <TownName>{town}</TownName>
      </div>
    </Row>
  </Root>
);

export default Logo;
