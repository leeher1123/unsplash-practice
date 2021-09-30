import React, { useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';

import { useDispatch, useSelector } from 'react-redux';

import {
  Route, Switch, useParams, useLocation,
} from 'react-router-dom';

import PhotoList from '../components/common/List/PhotoList';
import SearchLnb from '../components/common/Lnb/SearchLnb';
import { Action } from '../../redux/search/slice';

import GridList from '../components/common/List/GridList';
import CollectionItem from '../components/common/item/CollectionItem';
import UserItem from '../components/common/item/UserItem';
import { ContentContainer } from '../components/common/Layout/Layout.Styled';
import RelatedSearchesMenu from '../components/search/RelatedSearchesMenu';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const location = useLocation();

  const {
    photos, collections, users, related_searches,
  } = useSelector((state) => state.search);

  const qsParams = qs.parse(location.search, { ignoreQueryPrefix: true });

  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      query,
      per_page: 30,
      orientation: qsParams.orientation,
      color: qsParams.color,
      order_by: qsParams.order_by,
    }));
  };

  useEffect(() => {
    searchPhotos();
  }, [query, qsParams]);

  const renderCollectionItem = (item, index) => <CollectionItem item={item} index={index} />;
  const renderUserItem = (item, index) => <UserItem user={item} index={index} />;

  return (
    <Container>
      <SearchLnb data={{ photos, collections, users }} />

      <ContentContainer>
        <RelatedSearchesMenu menu={related_searches} />

        <Switch>
          <Route path="/search/photos/:query">
            <PhotoList data={photos.results} />
          </Route>
          <Route path="/search/collections/:query">
            <GridList
              data={collections.results}
              renderItem={renderCollectionItem}
            />
          </Route>
          <Route path="/search/users/:query">
            <GridList
              data={users.results}
              renderItem={renderUserItem}
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
