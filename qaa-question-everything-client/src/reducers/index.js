import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';
import apiUrlReducer from './apiUrlReducer';
import questionsReducer from './questionsReducer';

export default combineReducers({
  apiUrl : apiUrlReducer,
  user : userReducer,
  accountForm : formReducer,
  questions : questionsReducer
});
