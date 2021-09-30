import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown } from 'react-icons/vsc';

import { useLocation, useParams } from 'react-router-dom';

import qs from 'qs';

import FilterItem from './FilterItem';
import DropdownItem from '../Dropdown/DropdownItem';
import FilterLink from './FilterLink';

const LnbFilter = () => {
  const { query } = useParams();
  const location = useLocation();
  const qsParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Container>
      <FilterItem dropdownItems={[
        <DropdownItem>
          <FilterLink options={{ orientation: undefined }}>
            Any orientation
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink options={{ orientation: 'landscape' }}>
            <Box className="landscape" />
            Landscape
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink options={{ orientation: 'portrait' }}>
            <Box className="portrait" />
            Portrait
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink options={{ orientation: 'squarish' }}>
            <Box className="square" />
            Square
          </FilterLink>
        </DropdownItem>,
      ]}
      >
        Any orientation
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem>
          <FilterLink options={{ color: undefined }}>
            Any color
          </FilterLink>
        </DropdownItem>,
        <DropdownItem className="mb">
          <FilterLink options={{ color: 'black_and_white' }}>
            Black and white
          </FilterLink>
        </DropdownItem>,
      ]}
      >
        Any color
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem>
          <FilterLink options={{ order_by: undefined }}>
            Relevance
          </FilterLink>
        </DropdownItem>,
        <DropdownItem>
          <FilterLink options={{ order_by: 'latest' }}>
            Newest
          </FilterLink>
        </DropdownItem>,
      ]}
      >
        Sort by &nbsp;
        <span>Relevance</span>
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
