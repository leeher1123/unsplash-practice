import React from "react";
import styled from "styled-components";
import {IconLogo} from "../../../../icons";

const Logo = () => {
  return (
    <Container>
      <IconLogo/>
      <Text>
        <h1>Unsplash</h1>
        <p>Photos for everyone</p>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Text = styled.div`
  margin-left: 10px;
  color: #111;
  h1 {
    font-size: 15px;
    font-weight: bold;
  }
  p {
    font-size: 13px;
    margin-top: 3px;
  }
`;

export default Logo;