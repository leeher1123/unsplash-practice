import { takeLatest, put } from 'redux-saga/effects';

import { Action } from './slice';
import { Action as PhotosAction } from '../photos/slice';

const openPhotoPopup = function* ({ payload }) {
  yield put(PhotosAction.Creators.getPhotoById(payload));
};

function* saga() {
  yield takeLatest(Action.Types.OPEN_PHOTO_POPUP, openPhotoPopup);
}

export default saga;
