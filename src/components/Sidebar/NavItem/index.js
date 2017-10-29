// @flow
import React, { type Element } from 'react';
import styled from 'styled-components';

import { color, font, transition } from '../../../styles';

type Props = {|
  children: string,
  icon: Element<*>,
  onClick?: () => void,
  primary?: boolean,
  type?: 'group' | 'filter',
|};

const ICON_SPACING = '0.75em';
const PADDING_HORIZONTAL = 20;
const PADDING_VERTICAL = 10;

const Root = styled.button`
  background: ${props =>
    props.primary
      ? color.cinnabar
      : props.type === 'filter' ? color.pickledBluewood : color.ebonyClay};
  border: none;
  color: ${props => (props.type === 'filter' ? color.casper : color.white)};
  cursor: pointer;
  display: block;
  font-size: ${font.size.large}px;
  font-family: ${font.family.ui};
  font-weight: ${font.weight.normal};
  padding: ${PADDING_VERTICAL}px ${PADDING_HORIZONTAL}px;
  outline: none;
  transition: color ${transition};
  user-select: none;
  width: 100%;

  :hover {
    color: ${props => (props.primary ? color.pickledBluewood : color.cinnabar)};
  }
`;

const FlexWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const Label = styled.span`font-size: ${font.size.medium}px;`;

const Spacer = styled.div`width: ${ICON_SPACING};`;

const NavItem = ({ children, icon, primary, type }: Props) => (
  <Root primary={primary} type={type}>
    <FlexWrapper>
      {icon != null && icon}
      {icon != null && <Spacer />}
      <Label>{children}</Label>
    </FlexWrapper>
  </Root>
);

export default NavItem;
