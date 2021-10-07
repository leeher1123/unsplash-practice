import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import SearchBox from '../SearchBox';
import Logo from './Logo';
import Login from './Login';
import { IconBars } from '../../../../icons';

const Header = () => (
  <Container>
    <Logo />
    <SearchBox shape="round" />
    <Menu />
    <Login />
    <Icon>
      <IconBars />
    </Icon>
  </Container>
);

const Container = styled.div`
  height: 62px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  svg {
    width: 24px;
    height: 24px;
    font-size: 15px;
    font-weight: 400;
    fill: #767676;
  }
`;

export default Header;
