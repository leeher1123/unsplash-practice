import React from "react";
import styled from "styled-components";

const CollectionItem = ({item}) => {
    return (
        <Container>
          <img src={item.preview_photos[0].urls.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CollectionItem;