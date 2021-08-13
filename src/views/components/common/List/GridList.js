import React from "react";
import styled from "styled-components";

const GridList = ({data, renderItem}) => {
    return (
        <Container>
            <Row>
              {
                data.map((item, index) => (
                  <Col key={item.id}>
                    {renderItem(item, index)}
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
  padding: 0 -15px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 15px;
`;

export default GridList;