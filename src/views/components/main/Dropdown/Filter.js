import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import cn from 'classnames';

import { IconArrowDown, IconBag } from '../../../../icons';

const Filter = () => {
  const [handleItem, setHandleItem] = useState(false);
  const onClick = () => {
    setHandleItem(!handleItem);
  };
  return (
    <Container>
      <FilterName onClick={onClick}>
        <LeftIcon><IconBag /></LeftIcon>
        <h3>Company</h3>
        <RightIcon><IconArrowDown /></RightIcon>
      </FilterName>
      <FilterItems className={cn({ isActive: handleItem })}>
        <FilterItem to="/about">About</FilterItem>
        <FilterItem to="/brands">Brands</FilterItem>
        <FilterItem to="/history">History</FilterItem>
      </FilterItems>
    </Container>
  );
};

const Container = styled.div`

`;

const FilterName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
  h3 {
    font-size: 14px;
    font-weight: bold;
    color: #111;
    width: 140px;
  }
`;

const LeftIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #fff;
  }
`;

const RightIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterItems = styled.div`
  padding-left: 40px;
  display: none;
  &.isActive {
    display: block;
  }
`;

const FilterItem = styled(Link)`
  display: block;
  line-height: 1.6;
  margin-left: -12px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
  transition: .2s;
  &:hover {
    color: #111;
  }
`;

export default Filter;
