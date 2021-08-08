import React from "react";
import styled from "styled-components";
import {DefaultButton} from "../../Button/Button.Styled";
import cn from 'classnames';

const HeaderBtn = ({sort, children}) => {
    return (
        <Container className={cn('HeaderBtn', sort)}>
            <Button>{children}</Button>
        </Container>
    )
}

const Container = styled.div`

`;

const Button = styled(DefaultButton)`
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.2;
  border-radius: 4px;
  white-space: nowrap;
  
  .white & {
    background-color: #fff;
    border-color: #d1d1d1;
    color: #767676;
    position: relative;
    margin-right: 50px;
    transition: .2s;
    cursor: pointer;
    &:hover {
      border-color: #111;
      color: #111;
    }
  }
  .green & {
    background-color: #3cb46e;
    color: #fff;
    transition: .2s;
    cursor: pointer;
    &:hover {
      background-color: #37a866;
    }
  }
`;

export default HeaderBtn;