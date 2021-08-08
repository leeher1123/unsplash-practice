import React from "react";
import styled from "styled-components";
import SearchBox from "../../common/SearchBox";

const Banner = () => {
  return (
    <Container>
      <Content>
        <SearchBox shape={'square'}/>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background: url('https://images.unsplash.com/photo-1530550846191-5a0aeadee27a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80') 50% / cover no-repeat;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
`;

export default Banner;