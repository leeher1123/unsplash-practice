import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import SearchBox from "../SearchBox";
import {IconLogo} from "../../../../icons";

const Header = () => {
  return (
    <Container>
      <Logo>
        <IconLogo/>
      </Logo>
      <SearchBox/>
      <Menu/>
    </Container>
  )
}

const Container = styled.div`

`;

const Logo = styled.div`

`;

export default Header;