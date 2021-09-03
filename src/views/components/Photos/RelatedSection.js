import React from 'react';
import styled from 'styled-components';

const RelatedSection = ({ children, title }) => {
  const a = 1;
  return (
    <Container>
      <Title>
        Related
        {title}
      </Title>
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
`;

const Title = styled.h2`
  margin-bottom: 28px;
  font-size: 18px;
  color: #111;
`;

export default RelatedSection;
