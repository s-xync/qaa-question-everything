import { SET_VALID_SESSION, SET_USER_DETAILS, RESET_STATE_OF_USER, SET_GET_SESSION_FLAG } from '../actions/types.js';

const initialState = {
  validSession : false,
  getSessionFlag : false,
  userID : "",
  email : "",
  firstName : "",
  lastName : "",
  questionIDs : [],
  answeredQuestionIDs : []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_VALID_SESSION:{
      return {
        ...state,
        validSession : action.payload.flag
      };
    }

    case SET_GET_SESSION_FLAG:{
      return {
        ...state,
        getSessionFlag : action.payload.flag
      };
    }

    case SET_USER_DETAILS:{
      let { userID, email, firstName, lastName, questionIDs, answeredQuestionIDs } = action.payload;
      return {
        ...state,
        userID,
        email,
        firstName,
        lastName,
        questionIDs : [...questionIDs],
        answeredQuestionIDs : [...answeredQuestionIDs]
      };
    }

    case RESET_STATE_OF_USER:{
      return {
        ...initialState
      };
    }

    default:{
      return state;
    }
  }
};
