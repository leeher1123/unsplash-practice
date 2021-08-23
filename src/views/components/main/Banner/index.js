import React from 'react';
import styled from 'styled-components';

import SearchBox from '../../common/SearchBox';

const Banner = () => (
  <Container>
    <Content>
      <h1>Unsplash</h1>
      <h2>
        The internet’s source of &nbsp;
        <a href="/">freely-usable images</a>
        .
      </h2>
      <p>Powered by creators everywhere.</p>
      <SearchBox shape="square" />
    </Content>
  </Container>
);

const Container = styled.div`
  background: url('https://images.unsplash.com/photo-1518514854541-fe58ae2a5ef1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80') 50% / cover no-repeat;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 28.8px;
  h1 {
    font-size: 46px;
    font-weight: bold;
  }
  h2 {
    margin-top: 16px;
  }
  p {
    margin-bottom: 24px;
  }
  a {
    color: #ffffffcc;
    text-decoration: underline;
    transition: .3s;
    &:hover {
      color: #fff;
    }
  }
`;

export default Banner;
