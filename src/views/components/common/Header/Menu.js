import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../../../lib/styled';

const Menu = () => (
  <Container>
    <Text>
      <Item>Brands</Item>
      <Item className="long">🏆 Unsplash Awards</Item>
      <Item className="small">🏆 Awards</Item>
    </Text>
  </Container>
);

const Container = styled.div`
  height: 62px;
  ${media.sm(css`
    display: none;
  `)}
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 36px;
`;

const Item = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px 12px;
  font-size: 14px;
  font-weight: 500;
  transition: .2s;
  color: #767676;
  cursor: pointer;

  &:hover {
    color: #000;
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
export default Menu;
