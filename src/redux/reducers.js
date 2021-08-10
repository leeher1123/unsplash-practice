import {combineReducers} from "redux";
import appReducer from './app/slice';
import photosReducer from './photos/slice';
import searchReducer from './search/slice';

const reducers = combineReducers({
  app: appReducer,
  photos: photosReducer,
  search: searchReducer
});

export default reducers;