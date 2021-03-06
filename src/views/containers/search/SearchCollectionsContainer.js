import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';

import GridList from '../../components/common/List/GridList';
import CollectionItem from '../../components/common/item/CollectionItem';
import { Action } from '../../../redux/search/slice';
import Spinner from '../../components/common/Loader/Spinner';

const SearchCollectionsContainer = ({
  data, query, perPage, page, setPage,
}) => {
  const renderCollectionItem = (item, index) => <CollectionItem item={item} index={index} />;
  const dispatch = useDispatch();
  const next = () => {
    setPage((p) => p + 1);
  };
  const searchCollections = () => {
    dispatch(Action.Creators.searchCollections({
      query,
      page,
      perPage,
    }));
  };

  useEffect(() => {
    if (page > 1) {
      searchCollections();
    }
  }, [page]);
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
          renderItem={renderCollectionItem}
        />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchCollectionsContainer;
