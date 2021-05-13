/*
  Combines reducers into single session
  reducer
*/
import {combineReducers} from 'redux';
import auth from './auth'

const session = combineReducers({
  auth
});

export default session
