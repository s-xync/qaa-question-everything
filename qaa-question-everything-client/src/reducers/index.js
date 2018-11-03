import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import navBarReducer from './navBarReducer';
import formReducer from './formReducer';

// navBar : navBarReducer,
export default combineReducers({
  user : userReducer,
  accountForm : formReducer
});
