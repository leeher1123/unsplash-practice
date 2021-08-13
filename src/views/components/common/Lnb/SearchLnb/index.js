import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Filter from "./Filter";

const SearchLnb = () => {
  return (
    <Container>
      <Nav/>
      <Filter/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 56px;
  border-bottom: 1px solid #d1d1d1;
`;

export default SearchLnb;