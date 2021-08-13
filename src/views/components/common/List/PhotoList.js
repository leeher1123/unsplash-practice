import React from "react";
import styled from "styled-components";
import PhotoItem from "../item/PhotoItem";

const PhotoList = ({data}) => {
  return (
    <Container>
      <Row>
        {
          data.map((item) => (
            <Col key={item.id}>
              <PhotoItem item={item} />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 -15px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 15px;
`;

export default PhotoList;