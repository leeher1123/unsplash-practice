import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./slice";
import API from "../../api";

const getPhotos = function* ({payload}) {
  const result = yield call(API.getPhotos, payload)
  yield put(Action.Creators.setPhotos(result.data))
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos)
  ])
}

export default saga;