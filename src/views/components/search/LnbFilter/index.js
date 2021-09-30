import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown } from 'react-icons/vsc';

import { useLocation, useParams } from 'react-router-dom';

import qs from 'qs';

import FilterItem from './FilterItem';
import DropdownItem from '../Dropdown/DropdownItem';

const LnbFilter = () => {
  const { query } = useParams();
  const location = useLocation();
  const qsParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Container>
      <FilterItem dropdownItems={[
        <DropdownItem to={`/search/photos/${query}`}>Any orientation</DropdownItem>,
        <DropdownItem to={`/search/photos/${query}?${qs.stringify({
          ...qsParams,
          orientation: 'landscape',
        })}`}
        >
          <Box className="landscape" />
          Landscape
        </DropdownItem>,
        <DropdownItem to={`/search/photos/${query}?orientation=portrait`}>
          <Box className="portrait" />
          Portrait
        </DropdownItem>,
        <DropdownItem to={`/search/photos/${query}?orientation=squarish`}>
          <Box className="square" />
          Square
        </DropdownItem>,
      ]}
      >
        Any orientation
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem to={`/search/photos/${query}`}>Any color</DropdownItem>,
        <DropdownItem
          to={`/search/photos/${query}?color=black_and_white`}
          className="mb"
        >
          Black and white
        </DropdownItem>,
      ]}
      >
        any color
        <VscTriangleDown />
      </FilterItem>
      <FilterItem dropdownItems={[
        <DropdownItem to={`/search/photos/${query}`}>Relevance</DropdownItem>,
        <DropdownItem to={`/search/photos/${query}?order_by=latest`}>Newest</DropdownItem>,
      ]}
      >
        sort by &nbsp;
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

const ColorItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorItem = styled.div`
  width: 24px;
  height: 24px;
`;

export default LnbFilter;
