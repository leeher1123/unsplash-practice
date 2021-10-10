import React from 'react';
import styled from 'styled-components';

import SearchContainer from '../containers/SearchContainer';
import SearchPopupContainer from '../containers/SearchPopupContainer';

const Search = () => (
  <Container>
    <SearchContainer />
    <SearchPopupContainer />
  </Container>
);

const Container = styled.div`
  padding-top: 118px;
`;

export default Search;
