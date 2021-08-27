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

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),
  ]);
}

export default saga;
