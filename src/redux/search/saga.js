import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import { Action } from './slice';
import API from '../../api';

const combineSearchData = (category, state, result) => ({
  ...result.data,
  results: [
    ...state.search[category].results,
    ...result.data.results,
  ],
});

const search = function* ({ payload }) {
  const result = yield call(API.search, payload);
  yield put(Action.Creators.setSearchResult(result.data));
};

const searchPhotos = function* ({ payload }) {
  const result = yield call(API.searchPhotos, payload);
  const state = yield select();
  const newData = combineSearchData('photos', state, result);
  yield put(Action.Creators.setSearchPhotos(newData));
};

const searchCollections = function* ({ payload }) {
  const result = yield call(API.searchCollections, payload);
  const state = yield select();
  const newData = combineSearchData('collections', state, result);
  yield put(Action.Creators.setSearchCollections(newData));
};

const searchUsers = function* ({ payload }) {
  const result = yield call(API.searchUsers, payload);
  const state = yield select();
  const newData = combineSearchData('users', state, result);
  yield put(Action.Creators.setSearchUsers(newData));
};

function* saga() {
  yield takeLatest(Action.Types.SEARCH, search);
  yield takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotos);
  yield takeLatest(Action.Types.SEARCH_COLLECTIONS, searchCollections);
  yield takeLatest(Action.Types.SEARCH_USERS, searchUsers);
}

export default saga;
