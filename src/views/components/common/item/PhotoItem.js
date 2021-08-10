import React from "react";
import styled from "styled-components";

const PhotoItem = ({item}) => {
    return (
        <Container>
            <img src={item.urls.regular} />
        </Container>
    )
}

const Container = styled.div`
  img {
      height: 300px;
      width: 100%;
      object-fit: cover;
  }
`;

export default PhotoItem;