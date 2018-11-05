import { SET_VALID_SESSION, SET_USER_DETAILS, RESET_STATE_OF_USER, SET_GET_SESSION_FLAG } from './types';

export const setValidSession = (flag) => (dispatch) => {
  dispatch({
    type : SET_VALID_SESSION,
    payload : { flag }
  });
};

export const setGetSessionFlag = (flag) => (dispatch) => {
  dispatch({
    type : SET_GET_SESSION_FLAG,
    payload : { flag }
  });
}

export const setUserDetails = (userDetails) => (dispatch) => {
  const { userID, email, firstName, lastName, questionIDs, answeredQuestionIDs } = userDetails;
  dispatch({
    type : SET_USER_DETAILS,
    payload : { userID, email, firstName, lastName, questionIDs, answeredQuestionIDs }
  });
};

export const resetStateOfUser = () => (dispatch) => {
  dispatch({
    type : RESET_STATE_OF_USER,
    payload : null
  });
};
