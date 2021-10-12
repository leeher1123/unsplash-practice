import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';

import GridList from '../../components/common/List/GridList';
import UserItem from '../../components/common/item/UserItem';
import { Action } from '../../../redux/search/slice';
import Spinner from '../../components/common/Loader/Spinner';

const SearchUsersContainer = ({ data, query, perPage }) => {
  const renderUserItem = (item, index) => <UserItem item={item} index={index} />;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const next = () => {
    setPage((p) => p + 1);
  };
  const searchPhotos = () => {
    dispatch(Action.Creators.searchUsers({
      query,
      page,
      perPage,
    }));
  };

  useEffect(() => {
    searchPhotos();
  }, [query, page]);
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
        <GridList
          data={data}
          renderItem={renderUserItem}
        />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchUsersContainer;
