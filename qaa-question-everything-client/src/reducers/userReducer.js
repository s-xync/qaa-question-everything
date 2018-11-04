import { SET_VALID_SESSION, SET_USER_DETAILS } from '../actions/types.js';

const initialState = {
  validSession : false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_VALID_SESSION:
    return {
      ...state,
      validSession : action.payload.flag
    };

    case SET_USER_DETAILS:
    const { userID, email, firstName, lastName, questionIDs, answerIDs } = action.payload;
    return {
      ...state,
      userID,
      email,
      firstName,
      lastName,
      questionIDs,
      answerIDs
    };

    default:
    return state;
  }
};
