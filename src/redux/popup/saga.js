import { takeLatest, put } from 'redux-saga/effects';

import { Action } from './slice';
import { Action as PhotosAction } from '../photos/slice';

const openPhotoPopup = function* ({ payload }) {
  yield put(Action.Creators.updateState({
    openPopup: true,
    currentPhotoId: payload,
  }));
  yield put(PhotosAction.Creators.getPhotoById(payload));
  yield put(PhotosAction.Creators.getRelatedPhotos(payload));
};

function* saga() {
  yield takeLatest(Action.Types.OPEN_PHOTO_POPUP, openPhotoPopup);
}

export default saga;
