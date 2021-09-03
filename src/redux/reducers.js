import { combineReducers } from 'redux';

import appReducer from './app/slice';
import photosReducer from './photos/slice';
import searchReducer from './search/slice';
import topicsReducer from './topics/slice';
import popupReducer from './popup/slice';

const reducers = combineReducers({
  app: appReducer,
  photos: photosReducer,
  search: searchReducer,
  topics: topicsReducer,
  popup: popupReducer,
});

export default reducers;
