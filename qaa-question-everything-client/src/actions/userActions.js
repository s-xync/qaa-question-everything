import { SET_VALID_SESSION, SET_USER_DETAILS, REMOVE_STATE_OF_USER } from './types';

export const setValidSession = (flag) => (dispatch) => {
  dispatch({
    type : SET_VALID_SESSION,
    payload : { flag }
  });
};

export const setUserDetails = (userDetails) => (dispatch) => {
  const { userID, email, firstName, lastName, questionIDs, answeredQuestionIDs } = userDetails;
  dispatch({
    type : SET_USER_DETAILS,
    payload : { userID, email, firstName, lastName, questionIDs, answeredQuestionIDs }
  });
};

export const removeStateOfUser = () => (dispatch) => {
  dispatch({
    type : REMOVE_STATE_OF_USER,
    payload : null
  });
};
