import React, { useState } from 'react';
import styled from 'styled-components';

import { VscTriangleDown } from 'react-icons/vsc';

import cn from 'classnames';

import FilterItem from './FilterItem';
import DropdownItem from '../Dropdown/DropdownItem';
import FilterLink from './FilterLink';

const LnbFilter = () => {
  const [currentOrientation, setCurrentOrientation] = useState('Any orientation');
  const [currentColor, setCurrentColor] = useState('Any color');
  const [currentRelevance, setCurrentRelevance] = useState('Relevance');
  const colors = ['white', 'black', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'];
  return (
    <Container>
      <FilterItem dropdownItems={[
        <DropdownItem className="orientation">
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
            className={cn({ isColor: currentOrientation === 'Landscape' })}
          >
            <Box className="landscape" />
            Landscape
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink
            options={{ orientation: 'portrait' }}
            onClickLink={() => setCurrentOrientation('Portrait')}
            className={cn({ isColor: currentOrientation === 'Portrait' })}
          >
            <Box className="portrait" />
            Portrait
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink
            options={{ orientation: 'squarish' }}
            onClickLink={() => setCurrentOrientation('Square')}
            className={cn({ isColor: currentOrientation === 'Square' })}
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
        <Tones>
          <h3>Tones</h3>
          <ColorItems>
            {
              colors.map((item) => (
                <FilterLink options={{ color: item }}>
                  <ColorBackground>
                    <ColorItem className={item} />
                  </ColorBackground>
                </FilterLink>
              ))
            }
          </ColorItems>
        </Tones>,
      ]}
      >
        {currentColor}
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem className="sort">
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

const Tones = styled.div`
  padding: 8px 16px 8px 26px;
  height: 90px;
  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #767676;
  }
`;

const ColorItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 126px;
  margin-top: 12px;
`;

const ColorBackground = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: transparent;
  margin-bottom: 2px;
  transition: .2s;

  &:hover {
    background: rgba(170, 170, 170, 0.2);
  }
`;

const ColorItem = styled.div`
  width: 16px;
  height: 16px;
  background: #aaa;
  border-radius: 50%;
  margin: 4px;
  &:hover {
    background: #f5f5f5;
  }
  &.white {
    background: #fff;
    border: 1px solid rgba(221, 221, 221, 0.5);
  }
  &.black {
    background: #4d4d4d;
  }
  &.yellow {
    background: #fcdc00;
  }
  &.orange {
    background: #fe9200;
  }
  &.red {
    background: #f44e3b;
  }
  &.purple {
    background: #7b64ff;
  }
  &.magenta {
    background: #ab149e;
  }
  &.green {
    background: #a4dd00;
  }
  &.teal {
    background: #68ccca;
  }
  &.blue {
    background: #009ce0;
  }
`;

export default LnbFilter;
