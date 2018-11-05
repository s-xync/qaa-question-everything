import { APPEND_ASKED_QUESTION, APPEND_ANSWERED_QUESTION, RESET_STATE_OF_QUESTIONS } from './types';

export const appendAskedQuestion = (questionDetails) => (dispatch) => {
  dispatch({
    type : APPEND_ASKED_QUESTION,
    payload : {
      ...questionDetails
    }
  });
};

export const appendAnsweredQuestion = (questionDetails) => (dispatch) => {
  dispatch({
    type : APPEND_ANSWERED_QUESTION,
    payload : {
      ...questionDetails
    }
  });
};

export const resetStateOfQuestions = () => (dispatch) => {
  dispatch({
    type : RESET_STATE_OF_QUESTIONS,
    payload : null
  });
};
