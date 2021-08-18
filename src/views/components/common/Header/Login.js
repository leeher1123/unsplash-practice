import React from "react";
import styled from "styled-components";
import HeaderBtn from "./Button";

const Login = () => {
  return (
    <Container>
      <Content>
        <HeaderBtn sort={'white'}>
          Submit a photo
        </HeaderBtn>
        <a href="/">Login</a>
        <HeaderBtn sort={'green'}>
          Join free
        </HeaderBtn>
      </Content>
    </Container>
  )
}

const Container = styled.div`
 
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  a {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 14px;
    padding: 0 11px;
    position: relative;
    transition: .2s;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: -18px;
      width: 1px;
      height: 32px;
      background-color: #d1d1d1;
    }
    &:hover {
      color: #111;
    }
  }
`;

export default Login;