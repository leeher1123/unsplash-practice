import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { IconLogo } from '../../../../icons';
import { media } from '../../../../lib/styled';

const Logo = () => (
  <Container to="/">
    <IconLogo />
    <Text>
      <h1>Unsplash</h1>
      <p>Photos for everyone</p>
    </Text>
  </Container>
);

const Container = styled(Link)`
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
    font-weight: 500;
    white-space: nowrap;
  }

  ${media.lg(css`
    display: none;
  `)};
`;

export default Logo;
