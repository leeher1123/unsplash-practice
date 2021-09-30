import React from 'react';
import styled from 'styled-components';

import SearchContainer from '../containers/SearchContainer';

const Search = () => (
  <Container>
    <SearchContainer />
  </Container>
);

const Container = styled.div`
  padding-top: 118px;
`;

export default Search;
