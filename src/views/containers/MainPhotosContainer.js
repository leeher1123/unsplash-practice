import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoList from "../components/common/List/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/slice";

const MainPhotosContainer = () => {

  const list = useSelector(state => state.photos.list);

  const dispatch = useDispatch();

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = () => {
    dispatch(Action.Creators.getPhotos({
      client_id: 'ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4',
      per_page: 30
    }))
  }

    return (
        <Container>
            <PhotoList data={list} />
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotosContainer;