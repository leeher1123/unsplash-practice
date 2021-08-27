import React from 'react';
import styled from 'styled-components';

const ScrollMenu = ({ children, menu }) => (
  <Container>
    <Track>
      {
        menu.map((item) => children(item))
      }
    </Track>
  </Container>
);

const Container = styled.div`

`;

const Track = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ScrollMenu;
