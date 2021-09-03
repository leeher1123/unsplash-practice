import React from 'react';
import styled from 'styled-components';

import PhotoHeader from './PhotoHeader';

const PhotoDetail = ({ data }) => {
  const a = 1;
  return (
    <Container>
      <PhotoHeader data={data} />
      <DetailImage>
        <img src={data.urls.regular} alt="사진" />
      </DetailImage>
    </Container>
  );
};

const Container = styled.div`
  
`;

const DetailImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 767px;
    max-height: 781px;
  }
`;

export default PhotoDetail;
