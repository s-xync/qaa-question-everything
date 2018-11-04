import { SET_VALID_SESSION, SET_USER_DETAILS, REMOVE_STATE_OF_USER } from './types';

export const setValidSession = (flag) => (dispatch) => {
  dispatch({
    type : SET_VALID_SESSION,
    payload : {
      flag : flag
    }
  });
};

export const setUserDetails = (userDetails) => (dispatch) => {
  dispatch({
    type : SET_USER_DETAILS,
    payload : {
      userID : userDetails._id,
      email : userDetails.email,
      firstName : userDetails.firstName,
      lastName : userDetails.lastName,
      questionIDs : [...userDetails.questionIDs],
      answerIDs : [...userDetails.answerIDs]
    }
  });
};

export const removeStateOfUser = () => (dispatch) => {
  dispatch({
    type : REMOVE_STATE_OF_USER,
    payload : null
  });
};
