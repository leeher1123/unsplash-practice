import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import PhotoPopup from '../components/popup/PhotoPopup';
import { Action } from '../../redux/popup/slice';

const PhotoPopupContainer = () => {
  const dispatch = useDispatch();
  const { openPopup, currentPhotoId } = useSelector((state) => state.popup);
  const { photo, relatedPhotos } = useSelector((state) => state.photos);

  const onClose = () => {
    dispatch(Action.Creators.closePhotoPopup());
  };

  if (!openPopup || !currentPhotoId || !photo[currentPhotoId]) return null;

  return (
    <Container>
      {
        ReactDOM.createPortal(
          <PhotoPopup
            onClose={onClose}
            data={photo[currentPhotoId]}
            relatedPhotos={relatedPhotos?.[currentPhotoId]}
          />,
          document.getElementById('popup'),
        )
      }
    </Container>
  );
};

const Container = styled.div`
  
`;

export default PhotoPopupContainer;
