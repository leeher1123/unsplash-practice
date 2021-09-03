import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import PhotoPopup from '../components/popup/PhotoPopup';

const PhotoPopupContainer = () => {
  const a = 1;
  return (
    <Container>
      {
        ReactDOM.createPortal(
          <PhotoPopup />,
          document.getElementById('popup'),
        )
      }
    </Container>
  );
};

const Container = styled.div`
  
`;

export default PhotoPopupContainer;
