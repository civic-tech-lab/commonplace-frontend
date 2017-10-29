// @flow
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { color, font } from '../../styles';
import Logo from '../Logo';

type Props = {|
  town: string,
|};

const ACTIVE_CLASS_NAME = 'nav-item-active';

const Root = styled.div`
  align-items: center;
  background: ${color.white};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 30px;
`;

const HeaderNavLink = styled(NavLink).attrs({
  activeClassName: ACTIVE_CLASS_NAME,
})`
  color: ${color.casper};
  font-family: ${font.family.heading};
  font-size: ${font.size.medium}px;
  padding: 12px;
  text-decoration: none;

  :hover {
    color: ${color.cinnabar};
  }

  &.${ACTIVE_CLASS_NAME} {
    color: ${color.cinnabar};
  }
`;

const Header = ({ town }: Props) => (
  <Root>
    <Logo town={town} />
    <HeaderRight>
      <HeaderNavLink to="#my-page">My Page</HeaderNavLink>
      <HeaderNavLink to="#messages">Messages</HeaderNavLink>
      <HeaderNavLink to="#settings">Settings</HeaderNavLink>
    </HeaderRight>
  </Root>
);

export default Header;
