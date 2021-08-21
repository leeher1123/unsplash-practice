import React from "react";
import styled from "styled-components";
import PhotoItem from "../item/PhotoItem";
import {recomposePhotos} from "../../../../lib/photos";

const PhotoList = ({data}) => {

  const newData = recomposePhotos(data);

  return (
    <Container>
      <Row>
        {
          newData.map((group) => (
            <Col>
              {
                group.map((item) =>
                  <ItemWrapper>
                    <PhotoItem item={item}/>
                  </ItemWrapper>
                )}
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

const Container = styled.div`
  
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 -12px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 0 12px;
  position: relative;
`;

const ItemWrapper = styled.div`
  margin-bottom: 24px;
`;

export default PhotoList;