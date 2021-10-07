import React from 'react';
import styled, { css } from 'styled-components';

import { DefaultButton } from '../Button/Button.Styled';
import { media } from '../../../../lib/styled';

const Login = () => (
  <Container>
    <Content>
      <Text>Login</Text>
      <HeaderBtn className="long">
        Submit a photo
      </HeaderBtn>
      <HeaderBtn className="small">
        Submit
      </HeaderBtn>
    </Content>
  </Container>
);

const Container = styled.div`
 ${media.sm(css`
   display: none;
 `)}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 14px;
  padding: 0 11px;
  position: relative;
  transition: .2s;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
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
`;

const HeaderBtn = styled(DefaultButton)`
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.2;
  border-radius: 4px;
  white-space: nowrap;
  background-color: #fff;
  border-color: #d1d1d1;
  color: #767676;
  position: relative;
  margin-right: 10px;
  transition: .2s;
  cursor: pointer;
  &:hover {
    border-color: #111;
    color: #111;
  }
  &.long {
    ${media.md(css`
      display: none;
    `)};
  }
  &.small {
    display: none;
    ${media.md(css`
      display: flex;
    `)};
  }
`;

export default Login;
