import React from "react";
import styled from "styled-components";
import {IconSpot} from "../../../../icons";
import {DefaultButton} from "../Button/Button.Styled";

const Menu = () => {
  return (
    <Container>
      <Text>
        <a href="/">
          <div>Brand</div>
        </a>
        <a href="/">
          <div>Explore</div>
        </a>
        <a href="/">
          <div>Blog</div>
        </a>
        <Button>
          <IconSpot/>
        </Button>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  height: 62px;
  flex: 1;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 36px;
  a {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px 12px;
    font-size: 14px;
    font-weight: 500;
    transition: .2s;
    &:hover {
      color: #000;
    }
  }
`;

const Button = styled(DefaultButton)`
  padding: 0 12px;
  svg {
    color: #767676;
    fill: currentColor;
    transition: .2s;
    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
`;

export default Menu;