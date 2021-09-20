import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Filter from './Filter';

const SearchLnb = ({ data }) => (
  <Container>
    <Nav totalNum={data} />
    <Filter />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 62px;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 56px;
  border-bottom: 1px solid #d1d1d1;
`;

export default SearchLnb;
