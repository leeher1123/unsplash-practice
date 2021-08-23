import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Topics = () => {
  const { slug } = useParams();

  return (
    <Container>
      <h1>{slug}</h1>
    </Container>
  );
};

const Container = styled.div`

`;

export default Topics;
