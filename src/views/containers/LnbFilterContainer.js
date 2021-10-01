import React, { useEffect } from 'react';
import styled from 'styled-components';

import LnbFilter from '../components/search/LnbFilter';

const LnbFilterContainer = () => {
  useEffect(() => {

  }, []);
  return (
    <Container>
      <LnbFilter />
    </Container>
  );
};

const Container = styled.div`

`;

export default LnbFilterContainer;
