import { SET_HEAD_OF_ASK_QUESTION, SET_BODY_OF_ASK_QUESTION, RESET_STATE_OF_ASK_QUESTION, SET_ASK_QUESTION_DONE } from '../actions/types';

const initialState = {
  headAskQuestion : "",
  headAskQuestionHelp : "",
  headAskQuestionHelpClass : "",
  headAskQuestionFlag : false,
  bodyAskQuestion : "",
  bodyAskQuestionHelp : "",
  bodyAskQuestionHelpClass : "",
  bodyAskQuestionFlag : false,
  askQuestionDone : false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case RESET_STATE_OF_ASK_QUESTION:{
      return {
        ...initialState
      };
    }

    case SET_HEAD_OF_ASK_QUESTION:{
      return {
        ...state,
        headAskQuestion : action.payload.headAskQuestion,
        headAskQuestionHelp : action.payload.headAskQuestionHelp,
        headAskQuestionHelpClass : action.payload.headAskQuestionHelpClass,
        headAskQuestionFlag : action.payload.headAskQuestionFlag
      };
    }

    case SET_BODY_OF_ASK_QUESTION:{
      return {
        ...state,
        bodyAskQuestion : action.payload.bodyAskQuestion,
        bodyAskQuestionHelp : action.payload.bodyAskQuestionHelp,
        bodyAskQuestionHelpClass : action.payload.bodyAskQuestionHelpClass,
        bodyAskQuestionFlag : action.payload.bodyAskQuestionFlag
      };
    }

    case SET_ASK_QUESTION_DONE:{
      return {
        ...state,
        askQuestionDone : true
      };
    }

    default:{
      return state;
    }
  }
}
