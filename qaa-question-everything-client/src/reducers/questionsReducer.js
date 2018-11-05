import { APPEND_ASKED_QUESTION, SORT_ASKED_QUESTIONS, RESET_STATE_OF_QUESTIONS } from '../actions/types.js';

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
    ];
    return {
      ...state,
      askedQuestions,
      askedQuestionsArray : askedQuestionsArray.sort((x, y) => {return(y.votes-x.votes)})
    };

    case RESET_STATE_OF_QUESTIONS:
    return {
      ...initialState
    };

    case SORT_ASKED_QUESTIONS:
    return {
      ...state,
      askedQuestionsArray : state.askedQuestionsArray.sort((x, y) => {return(y.votes-x.votes)})
    }

    default:
    return state;
  }
}
