import { SET_VALID_SESSION, SET_USER_DETAILS, REMOVE_STATE_OF_USER } from '../actions/types.js';

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
    const { userID, email, firstName, lastName, questionIDs, answeredQuestionIDs } = action.payload;
    return {
      ...state,
      userID,
      email,
      firstName,
      lastName,
      questionIDs,
      answeredQuestionIDs
    };

    case REMOVE_STATE_OF_USER:
    return {
      ...initialState
    };

    default:
    return state;
  }
};
