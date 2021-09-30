import React, { useState } from 'react';
import styled from 'styled-components';

import { VscTriangleDown } from 'react-icons/vsc';

import FilterItem from './FilterItem';
import DropdownItem from '../Dropdown/DropdownItem';
import FilterLink from './FilterLink';

const LnbFilter = () => {
  const [currentOrientation, setCurrentOrientation] = useState('Any orientation');
  const [currentColor, setCurrentColor] = useState('Any color');
  const [currentRelevance, setCurrentRelevance] = useState('Relevance');
  return (
    <Container>
      <FilterItem dropdownItems={[
        <DropdownItem>
          <FilterLink
            options={{ orientation: undefined }}
            onClickLink={() => setCurrentOrientation('Any orientation')}
          >
            Any orientation
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink
            options={{ orientation: 'landscape' }}
            onClickLink={() => setCurrentOrientation('Landscape')}
          >
            <Box className="landscape" />
            Landscape
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink
            options={{ orientation: 'portrait' }}
            onClickLink={() => setCurrentOrientation('Portrait')}
          >
            <Box className="portrait" />
            Portrait
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink
            options={{ orientation: 'squarish' }}
            onClickLink={() => setCurrentOrientation('Square')}
          >
            <Box className="square" />
            Square
          </FilterLink>
        </DropdownItem>,
      ]}
      >
        {currentOrientation}
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem>
          <FilterLink
            options={{ color: undefined }}
            onClickLink={() => setCurrentColor('Any color')}
          >
            Any color
          </FilterLink>
        </DropdownItem>,
        <DropdownItem className="mb">
          <FilterLink
            options={{ color: 'black_and_white' }}
            onClickLink={() => setCurrentColor('Black and white')}
          >
            Black and white
          </FilterLink>
        </DropdownItem>,
      ]}
      >
        {currentColor}
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem>
          <FilterLink
            options={{ order_by: undefined }}
            onClickLink={() => setCurrentRelevance('Relevance')}
          >
            Relevance
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink
            options={{ order_by: 'latest' }}
            onClickLink={() => setCurrentRelevance('Newest')}
          >
            Newest
          </FilterLink>
        </DropdownItem>,
      ]}
      >
        Sort by &nbsp;
        <span>{currentRelevance}</span>
        <VscTriangleDown />
      </FilterItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  background: #e4e4e4;
  border: 1px solid rgb(177, 177, 177);
  margin-right: 10px;
  &.landscape {
    width: 18px;
    height: 12px;
  }
  &.portrait {
    width: 12px;
    height: 18px;
  }
  &.square {
    width: 18px;
    height: 18px;
  }
`;

export default LnbFilter;
