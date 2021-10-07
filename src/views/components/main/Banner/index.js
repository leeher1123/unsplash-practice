import React from 'react';
import styled, { css } from 'styled-components';

import SearchBox from '../../common/SearchBox';
import { media } from '../../../../lib/styled';

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
  padding: 144px 150px 134px;
  ${media.sm(css`
    padding: 80px 12px 62px;
  `)}
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  h1 {
    font-size: 46px;
    font-weight: bold;
  }
  h2 {
    margin-top: 30px;
  }
  p {
    margin-bottom: 24px;
    line-height: 2.4;
  }
  a {
    color: #ffffffcc;
    text-decoration: underline;
    transition: .3s;
    &:hover {
      color: #fff;
    }
  }
  ${media.sm(css`
    h1 {
      font-size: 24px;
      font-weight: bold;
    }
    h2, p {
      font-size: 15px;
      font-weight: 400;
    }
  `)}
`;

export default Banner;
