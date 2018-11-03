import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import navBarReducer from './navBarReducer';
import formReducer from './formReducer';
import apiUrlReducer from './apiUrlReducer';

// navBar : navBarReducer,
export default combineReducers({
  apiUrl : apiUrlReducer,
  user : userReducer,
  accountForm : formReducer
});
