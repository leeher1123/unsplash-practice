import { call, put, takeLatest } from 'redux-saga/effects';

import { Action } from './slice';
import API from '../../api';

const searchPhotos = function* ({ payload }) {
  const result = yield call(API.searchPhotos, payload);
  yield put(Action.Creators.setSearchResult(result.data));
};

function* saga() {
  yield takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotos);
}

export default saga;
