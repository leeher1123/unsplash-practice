import React from 'react';
import styled from 'styled-components';

import PhotoSections from '../Photos/PhotoSections';

const PhotoPopup = ({ data, onClose = () => {}, relatedPhotos }) => (
  <Container>
    <Track>
      <Contents>
        <Inner>
          <PhotoSections
            data={data}
            relatedPhotos={relatedPhotos}
          />
        </Inner>
      </Contents>
    </Track>
    <Screen onClick={onClose} />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

const Track = styled.div`
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
  overflow-y: auto;
`;

const Contents = styled.div`
  position: relative;
  max-width: 85vw;
  margin: 0 auto;
  z-index: 10;
  background: #fff;
  padding-bottom: 80px;
  border-radius: 4px;
`;

const Inner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 12px;
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
