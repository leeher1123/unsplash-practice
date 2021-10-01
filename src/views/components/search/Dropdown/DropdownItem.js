import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropdownItem = ({ children, to, className }) => {
  const a = 1;
  return (
    <Container to={to} className={className}>
      {children}
    </Container>
  );
};

const Container = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 26px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  transition: .2s;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  &.sort {
    width: 133px;
  }
  &.orientation {
    min-width: 180px;
  }
`;

export default DropdownItem;
