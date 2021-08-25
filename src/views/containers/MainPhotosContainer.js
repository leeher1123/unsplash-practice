import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import PhotoList from '../components/common/List/PhotoList';
import { Action } from '../../redux/photos/slice';
import { ContentContainer } from '../components/common/Layout/Layout.Styled';

const MainPhotosContainer = () => {
  const list = useSelector((state) => state.photos.list);

  const dispatch = useDispatch();

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      per_page: 30,
    }));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <PhotoList data={list} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`

`;

export default MainPhotosContainer;
