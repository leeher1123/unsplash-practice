import React from 'react';
import styled from 'styled-components';

import Banner from '../components/main/Banner';
import MainPhotosContainer from '../containers/MainPhotosContainer';

const Main = () => (
  <Container>
    <Banner />
    <MainPhotosContainer />
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
`;

export default Main;
