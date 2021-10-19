import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import qs from 'qs';

import { useDispatch, useSelector } from 'react-redux';

import {
  Route, Switch, useParams, useLocation,
} from 'react-router-dom';

import PhotoList from '../../components/common/List/PhotoList';
import SearchLnb from '../../components/common/Lnb/SearchLnb';
import { Action } from '../../../redux/search/slice';

import GridList from '../../components/common/List/GridList';
import CollectionItem from '../../components/common/item/CollectionItem';
import UserItem from '../../components/common/item/UserItem';
import { ContentContainer } from '../../components/common/Layout/Layout.Styled';
import RelatedSearchesMenu from '../../components/search/RelatedSearchesMenu';
import SearchPhotosContainer from './SearchPhotosContainer';
import SearchCollectionsContainer from './SearchCollectionsContainer';
import SearchUsersContainer from './SearchUsersContainer';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const location = useLocation();
  const { orientation, color, order_by } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const perPage = 5;
  const [page, setPage] = useState(1);

  const {
    photos, collections, users, related_searches,
  } = useSelector((state) => state.search);

  const searchPhotos = () => {
    dispatch(Action.Creators.search({
      query,
      perPage,
      orientation,
      color,
      order_by,
      page: 1, // page 가 1일 떄는 여기서 통신
    }));
  };

  const initializeView = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    searchPhotos();
    initializeView();
  }, [query, orientation, color, order_by]);

  return (
    <Container>
      <SearchLnb data={{ photos, collections, users }} onClick={initializeView} />

      <ContentContainer>
        <RelatedSearchesMenu menu={related_searches} initializeView={initializeView} />

        <Switch>
          <Route path="/search/photos/:query">
            <SearchPhotosContainer
              data={photos.results}
              query={query}
              perPage={perPage}
              page={page}
              setPage={setPage}
            />
          </Route>
          <Route path="/search/collections/:query">
            <SearchCollectionsContainer
              data={collections.results}
              query={query}
              perPage={perPage}
              page={page}
              setPage={setPage}
            />
          </Route>
          <Route path="/search/users/:query">
            <SearchUsersContainer
              data={users.results}
              query={query}
              perPage={perPage}
              page={page}
              setPage={setPage}
            />
          </Route>
        </Switch>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchContainer;
