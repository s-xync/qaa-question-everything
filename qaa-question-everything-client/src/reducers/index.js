import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navBarReducer from './navBarReducer';

export default combineReducers({
  navBar : navBarReducer,
  user : userReducer
});
