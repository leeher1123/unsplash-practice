import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoList from "../components/common/List/PhotoList";
import SearchLnb from "../components/common/Lnb/SearchLnb";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/slice";
import {Route, Switch, useParams} from "react-router-dom";
import GridList from "../components/common/List/GridList";
import CollectionItem from "../components/common/item/CollectionItem";
import UserItem from "../components/common/item/UserItem";

const SearchContainer = () => {

  const dispatch = useDispatch();
  const {query} = useParams();
  const {photos, collections, users, related_searches} = useSelector(state => state.search);

  useEffect(() => {
    searchPhotos();
  }, [])

  const searchPhotos = () => {
    dispatch(Action.Creators.searchPhotos({
      query,
      per_page: 30
    }))
  }

  const renderCollectionItem = (item, index) => <CollectionItem item={item} index={index} />
  const renderUserItem = (item, index) => <UserItem item={item} index={index} />

  return (
    <Container>
      <SearchLnb/>
      <Switch>
        <Route path={`/search/photos/:query`}>
          <PhotoList data={photos.results}/>
        </Route>
        <Route path={`/search/collections/:query`}>
          <GridList data={collections.results}
                    renderItem={renderCollectionItem}
          />
        </Route>
        <Route path={`/search/users/:query`}>
          <GridList data={users.results}
                    renderItem={renderUserItem}
          />
        </Route>
      </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default SearchContainer;