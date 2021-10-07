import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import SearchBox from '../SearchBox';
import Logo from './Logo';
import Login from './Login';
import { IconBars } from '../../../../icons';
import Dropdown from '../../main/Dropdown';
import ContainChecker from '../ContainChecker';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const onClick = () => {
    setDropdown(!dropdown);
  };
  const check = (isContain) => {
    if (!isContain) {
      setDropdown(isContain);
    }
  };

  return (
    <Container>
      <Logo />
      <SearchBox shape="round" />
      <Menu />
      <Login />
      <ContainChecker check={check}>
        <Icon onClick={onClick}>
          <IconBars />
        </Icon>
        <Dropdown isVisible={dropdown} />
      </ContainChecker>
    </Container>
  );
};

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
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    font-size: 15px;
    font-weight: 400;
    fill: #767676;
    transition: .2s;
    &:hover {
      fill: #111;
    }
  }
`;

export default Header;
