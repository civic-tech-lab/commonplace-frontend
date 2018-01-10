// @flow
import React, { type Element, type Node } from 'react';
import styled from 'styled-components';

import {
  brandColor,
  textColor,
  font,
  transition,
} from '../../styles/variables';

type Props = {|
  block?: boolean,
  children: Node,
  primary?: boolean,
  icon?: Element<*>,
|};

const HOVER_OPACITY = 0.5;
const ICON_SPACING = '0.5em';
const PADDING_HORIZONTAL = 10;
const PADDING_VERTICAL = 7;

const Root = styled.button`
  background: none;
  border: none;
  color: ${props => (props.primary ? brandColor.primary : textColor.subdued)};
  cursor: pointer;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  font-size: ${font.size.medium}px;
  font-family: ${font.family.ui};
  font-weight: ${font.weight.bold};
  padding: ${PADDING_VERTICAL}px ${PADDING_HORIZONTAL}px;
  outline: none;
  transition: opacity ${transition};
  user-select: none;
  width: ${props => (props.block ? '100%' : 'auto')};

  :hover {
    opacity: ${HOVER_OPACITY};
  }
`;

const FlexWrapper = styled.div`
  align-items: bottom;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${props => (props.block ? '100%' : 'auto')};
`;

const Spacer = styled.span`width: ${ICON_SPACING};`;

const Button = ({ block = false, children, icon, primary }: Props) => (
  <Root block={block} primary={primary}>
    <FlexWrapper block={block}>
      {icon != null && icon}
      {icon != null && <Spacer key="spacer" />}
      {children}
    </FlexWrapper>
  </Root>
);

export default Button;
