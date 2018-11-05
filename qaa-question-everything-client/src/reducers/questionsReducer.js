import { APPEND_ASKED_QUESTION, RESET_STATE_OF_QUESTIONS } from '../actions/types.js';

const initialState = {
  askedQuestions : {},
  answeredQuestions : {},
  askedQuestionsArray : [],
  answeredQuestionsArray : []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case APPEND_ASKED_QUESTION:
    const { questionID } = action.payload;
    const askedQuestions = {
      ...state.askedQuestions,
      [questionID] : {
        ...action.payload
      }
    };
    const askedQuestionsArray = [
      ...state.askedQuestionsArray,
      {
        questionID : action.payload.questionID,
        votes : action.payload.votes
      }
    ].sort((x, y) => (y.votes-x.votes));
    return {
      ...state,
      askedQuestions,
      askedQuestionsArray
    };

    case RESET_STATE_OF_QUESTIONS:
    return {
      ...initialState
    };

    default:
    return state;
  }
}
