import React from 'react';
import styled from 'styled-components';

import DetailScreen from './DetailScreen';

const PhotoItem = ({ item, onClick = () => {} }) => (
  <Container onClick={onClick}>
    <Image>
      <img src={item.urls.regular} alt="사진" />
      <DetailScreen item={item} />
    </Image>
  </Container>
);

const Container = styled.div`
  
`;

const Image = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

export default PhotoItem;
