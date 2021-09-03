import React from 'react';
import styled from 'styled-components';

const PhotoPopup = () => {
  const a = 1;
  return (
    <Container>
      <Track>
        <Contents>
          <Inner>
            photoDetail
            relatedPhotos
            relatedCollections
            relatedTags
          </Inner>
        </Contents>
      </Track>
      <Screen />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

const Contents = styled.div`
  position: relative;
  max-width: 85vw;
  margin: 0 auto;
  z-index: 10;
`;

const Track = styled.div`
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
  overflow-y: auto;
`;

const Inner = styled.div`
  background: #fff;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export default PhotoPopup;
