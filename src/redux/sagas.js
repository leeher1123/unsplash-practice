import {fork, all} from 'redux-saga/effects';
import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(photosSaga),
    fork(searchSaga)
  ])
}

export default sagas;