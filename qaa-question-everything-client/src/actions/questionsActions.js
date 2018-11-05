import { APPEND_ASKED_QUESTION, RESET_STATE_OF_QUESTIONS } from './types';

export const appendAskedQuestion = (questionDetails) => (dispatch) => {
  dispatch({
    type : APPEND_ASKED_QUESTION,
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
