import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import DropdownItem from './DropdownItem';
import Filter from './Filter';

const Dropdown = ({ isVisible }) => {
  const a = 1;
  return (
    <Container className={cn({ isVisible })}>
      <DropdownItem>
        <Filter />
      </DropdownItem>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 55px;
  right: 21px;
  z-index: 1001;
  border: 1px solid rgba(170, 170, 170, 0.5);
  box-shadow: 0 8px 16px rgb(0 0 0 / 16%);
  border-radius: 4px;
  background-color: #fff;
  padding: 16px 24px;
  opacity: 0;
  transform: scale(0);
  transition: .2s;
  &.isVisible {
    opacity: 1;
    transform: scale(1);
  }
`;

export default Dropdown;
