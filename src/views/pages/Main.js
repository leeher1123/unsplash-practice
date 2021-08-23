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

`;

export default Main;
