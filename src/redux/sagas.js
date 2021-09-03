import { fork, all } from 'redux-saga/effects';

import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';
import popupSaga from './popup/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(photosSaga),
    fork(searchSaga),
    fork(topicsSaga),
    fork(popupSaga),
  ]);
}

export default sagas;
