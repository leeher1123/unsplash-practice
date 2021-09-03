import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import PhotoList from '../components/common/List/PhotoList';
import { Action } from '../../redux/photos/slice';
import { ContentContainer } from '../components/common/Layout/Layout.Styled';
import InfiniteScroll from '../components/common/InfiniteScroll';

const MainPhotosContainer = () => {
  const [page, setPage] = useState(1);
  const list = useSelector((state) => state.photos.list);

  const dispatch = useDispatch();

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      page,
      per_page: 10,
    }));
  };

  const next = () => {
    setPage((p) => p + 1);
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll
          length={list.length}
          next={next}
        >
          <PhotoList data={list} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 80px;
`;

export default MainPhotosContainer;
