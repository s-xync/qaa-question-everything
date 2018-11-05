import { APPEND_ASKED_QUESTION, SORT_ASKED_QUESTIONS, RESET_STATE_OF_QUESTIONS } from './types';

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

export const sortAskedQuestions = () => (dispatch) => {
  dispatch({
    type : SORT_ASKED_QUESTIONS,
    payload : null
  });
};
