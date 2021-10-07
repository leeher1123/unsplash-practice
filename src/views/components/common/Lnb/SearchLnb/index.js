import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import LnbFilterContainer from '../../../../containers/LnbFilterContainer';

const SearchLnb = ({ data }) => (
  <Container>
    <Nav totalNum={data} />
    <LnbFilterContainer />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 62px;
  left: 0;
  right: 0;
  z-index: 500;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 56px;
  border-bottom: 1px solid #d1d1d1;
`;

export default SearchLnb;
