import {
  takeLatest, all, call, put, select,
} from 'redux-saga/effects';
import _ from 'lodash';

import { Action } from './slice';
import API from '../../api';

const getPhotos = function* ({ payload }) {
  const result = yield call(API.getPhotos, payload);
  if (_.isEmpty(result)) return;

  const { photos } = yield select();
  const nextPhotos = [
    ...photos.list,
    ...result.data,
  ];
  yield put(Action.Creators.setPhotos(nextPhotos));
};

const getPhotoById = function* ({ payload }) {
  const result = yield call(API.getPhotoById, payload);
  if (_.isEmpty(result.data)) return;
  yield put(Action.Creators.setPhotoById(result.data));
};

const getRelatedPhotos = function* ({ payload }) {
  const result = yield call(API.getRelatedPhotos, payload);
  if (_.isEmpty(result.data)) return;
  yield put(Action.Creators.setRelatedPhotos({
    id: payload,
    data: result.data,
  }));
};

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),
    takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoById),
    takeLatest(Action.Types.GET_RELATED_PHOTOS, getRelatedPhotos),
  ]);
}

export default saga;
