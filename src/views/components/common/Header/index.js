import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import SearchBox from '../SearchBox';
import Logo from './Logo';
import Login from './Login';

const Header = () => (
  <Container>
    <Logo />
    <SearchBox shape="round" />
    <Menu />
    <Login />
  </Container>
);

const Container = styled.div`
  height: 62px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export default Header;
