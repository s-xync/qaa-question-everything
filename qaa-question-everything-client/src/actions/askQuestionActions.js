import { SET_HEAD_OF_ASK_QUESTION, SET_BODY_OF_ASK_QUESTION, RESET_STATE_OF_ASK_QUESTION } from './types';

export const resetStateOfAskQuestion = () => (dispatch) => {
  dispatch({
    type : RESET_STATE_OF_ASK_QUESTION,
    payload : null
  });
};

export const setHeadOfAskQuestion = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 25){
    dispatch({
      type : SET_HEAD_OF_ASK_QUESTION,
      payload : {
        headAskQuestion : value,
        headAskQuestionHelpClass : "text-success",
        headAskQuestionHelp : "Validated",
        headAskQuestionFlag : true
      }
    });
  }else{
    dispatch({
      type : SET_HEAD_OF_ASK_QUESTION,
      payload : {
        headAskQuestion : value,
        headAskQuestionHelpClass : "text-danger",
        headAskQuestionHelp : "Question head has to be more than 25 characters",
        headAskQuestionFlag : false
      }
    });
  }
};

export const setBodyOfAskQuestion = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 0){
    dispatch({
      type : SET_BODY_OF_ASK_QUESTION,
      payload : {
        bodyAskQuestion : value,
        bodyAskQuestionHelpClass : "text-success",
        bodyAskQuestionHelp : "Validated",
        bodyAskQuestionFlag : true
      }
    });
  }else{
    dispatch({
      type : SET_BODY_OF_ASK_QUESTION,
      payload : {
        bodyAskQuestion : value,
        bodyAskQuestionHelpClass : "text-danger",
        bodyAskQuestionHelp : "Question body cannot be empty",
        bodyAskQuestionFlag : false
      }
    });
  }
};
