import React from 'react';
import styled from 'styled-components';

import DetailScreen from './DetailScreen';

const PhotoItem = ({ item, onClick = () => {} }) => (
  <Container onClick={onClick}>
    <Image>
      <img src={item.urls.regular} alt="사진" />
    </Image>
    <DetailScreen item={item} />
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const Image = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default PhotoItem;
