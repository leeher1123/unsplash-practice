import React from "react";
import styled from "styled-components";
import {DefaultButton} from "../../Button/Button.Styled";
import { VscTriangleDown } from 'react-icons/vsc';

const Filter = () => {
    return (
        <Container>
          <Button>
            any orientation
            <VscTriangleDown/>
          </Button>
          <Button>
            any color
            <VscTriangleDown/>
          </Button>
          <Button>
            sort by &nbsp;
            <span>Relevance</span>
            <VscTriangleDown/>
          </Button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(DefaultButton)`
  display: flex;
  align-items: center;
  color: #767676;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 400;
  padding: 7px 0;
  cursor: pointer;
  transition: .2s;
  svg {
    color: #d1d1d1;
    font-size: 12px;
    margin-left: 8px;
    transition: .2s;
  }
  
  &:hover {
    color: #111;
    svg {
      fill: #111;
    }
  }
  
  span {
    color: #111;
  }
  
  & + & {
    margin-left: 24px;
  }
`;

export default Filter;