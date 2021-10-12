import React, { useEffect } from 'react';
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
  const perPage = 5;

  const {
    photos, collections, users, related_searches,
  } = useSelector((state) => state.search);

  const searchPhotos = () => {
    dispatch(Action.Creators.search({
      query,
      perPage,
    }));
  };

  useEffect(() => {
    searchPhotos();
  }, [query]);

  return (
    <Container>
      <SearchLnb data={{ photos, collections, users }} />

      <ContentContainer>
        <RelatedSearchesMenu menu={related_searches} />

        <Switch>
          <Route path="/search/photos/:query">
            <SearchPhotosContainer
              data={photos.results}
              query={query}
              perPage={perPage}
            />
          </Route>
          <Route path="/search/collections/:query">
            <SearchCollectionsContainer
              data={collections.results}
              query={query}
              perPage={perPage}
            />
          </Route>
          <Route path="/search/users/:query">
            <SearchUsersContainer
              data={users.results}
              query={query}
              perPage={perPage}
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
