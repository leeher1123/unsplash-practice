import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoList from "../components/common/List/PhotoList";

const MainPhotosContainer = () => {

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = () => {

  }

    return (
        <Container>
            <PhotoList/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotosContainer;