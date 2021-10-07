import React from 'react';
import styled from 'styled-components';

const DropdownItem = ({ children }) => {
  const a = 1;
  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 220px;
`;

export default DropdownItem;
