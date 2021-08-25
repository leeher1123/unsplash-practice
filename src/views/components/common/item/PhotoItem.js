import React from 'react';
import styled from 'styled-components';

const PhotoItem = ({ item }) => (
  <Container>
    <img src={item.urls.regular} alt="사진" />
  </Container>
);

const Container = styled.div`
  img {
      width: 100%;
  }
`;

export default PhotoItem;
