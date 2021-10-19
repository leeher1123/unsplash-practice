import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import InfiniteScroll from 'react-infinite-scroll-component';

import qs from 'qs';

import { useDispatch } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';

import PhotoList from '../../components/common/List/PhotoList';
import Spinner from '../../components/common/Loader/Spinner';
import { Action } from '../../../redux/search/slice';

const SearchPhotosContainer = ({
  data, query, perPage, page, setPage,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { orientation, color, order_by } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const next = () => {
    setPage((p) => p + 1);
  };
  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      query,
      page,
      perPage,
      orientation,
      color,
      order_by,
    }));
  };

  useEffect(() => {
    if (page > 1) { // page 가 1일 때는 search 에서 통신할 것이기 때문
      searchPhotos();
    }
  }, [page]); // 오로지 무한스크롤 용도
  return (
    <Container>
      <InfiniteScroll
        dataLength={data.length}
        next={next}
        hasMore
        loader={<Spinner />}
        endMessage={(
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        )}
      >
        <PhotoList data={data} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchPhotosContainer;
