import {takeLatest, all, call, put} from 'redux-saga/effects';
import {Action} from "./slice";
import API from "../../api";

const getTopics = function* ({payload}) {
  const result = yield call(API.getTopics, payload)
  if(!result.data) return;
  yield put(Action.Creators.setTopics(result.data))
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_TOPICS, getTopics)
  ])
}

export default saga;