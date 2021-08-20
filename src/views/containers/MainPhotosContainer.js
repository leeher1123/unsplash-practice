import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoList from "../components/common/List/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/slice";
import {ContentContainer} from "../components/common/Layout/Layout.Styled";

const MainPhotosContainer = () => {

  const list = useSelector(state => state.photos.list);

  const dispatch = useDispatch();

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      per_page: 30
    }))
  }

  return (
    <Container>
      <ContentContainer>
        <PhotoList data={list}/>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

export default MainPhotosContainer;