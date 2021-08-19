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
      width: 100%;
  }
`;

export default PhotoItem;