import { APPEND_ASKED_QUESTION, APPEND_ANSWERED_QUESTION, RESET_STATE_OF_QUESTIONS } from '../actions/types.js';

const initialState = {
  allQuestions : {},
  askedQuestionsArray : [],
  answeredQuestionsArray : []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case APPEND_ASKED_QUESTION:{
      const { questionID } = action.payload;
      let flag = false;
      for(let i = 0; i < state.askedQuestionsArray.length; i++){
        if(questionID === state.askedQuestionsArray[i].questionID){
          flag = true;
        }
      }
      if(!flag){
        const allQuestions = {
          ...state.allQuestions,
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
          allQuestions,
          askedQuestionsArray
        };
      }else{
        return state;
      }
    }

    case APPEND_ANSWERED_QUESTION:{
      const { questionID } = action.payload;
      let flag = false;
      for(let i = 0; i < state.answeredQuestionsArray.length; i++){
        if(questionID === state.answeredQuestionsArray[i].questionID){
          flag = true;
        }
      }
      if(!flag){
        const allQuestions = {
          ...state.allQuestions,
          [questionID] : {
            ...action.payload
          }
        };
        const answeredQuestionsArray = [
          ...state.answeredQuestionsArray,
          {
            questionID : action.payload.questionID,
            votes : action.payload.votes
          }
        ].sort((x, y) => (y.votes-x.votes));
        return {
          ...state,
          allQuestions,
          answeredQuestionsArray
        };
      }else{
        return state;
      }
    }

    case RESET_STATE_OF_QUESTIONS:{
      return {
        ...initialState
      };
    }

    default:{
      return state;
    }
  }
}
