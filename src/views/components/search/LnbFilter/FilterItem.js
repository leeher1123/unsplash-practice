import React, { useState } from 'react';
import styled from 'styled-components';

import cn from 'classnames';

import Dropdown from '../Dropdown';

const FilterItem = ({ children, dropdownItems = [] }) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const onClick = () => {
    setVisibleDropdown(!visibleDropdown);
  };

  const onClickItem = () => {
    setVisibleDropdown(false);
  };
  return (
    <Container>
      <FilterName onClick={onClick}>{ children }</FilterName>
      <Dropdown
        isVisible={visibleDropdown}
        items={dropdownItems}
        onClickItem={onClickItem}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  & + & {
    margin-left: 24px;
  }
`;

const FilterName = styled.div`
  display: flex;
  align-items: center;
  color: #767676;
  font-size: 14px;
  font-weight: 400;
  padding: 7px 0;
  cursor: pointer;
  transition: .2s;
  svg {
    color: #d1d1d1;
    font-size: 12px;
    margin-left: 8px;
    transition: .2s;
  }

  &:hover {
    color: #111;
    svg {
      fill: #111;
    }
  }

  span {
    color: #111;
  }
`;

export default FilterItem;
