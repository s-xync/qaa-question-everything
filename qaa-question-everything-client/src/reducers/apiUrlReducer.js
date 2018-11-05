import { SET_API_URL } from '../actions/types';

const initialState = {
  value : ""
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_API_URL:{
      return {
        ...state,
        value : action.payload.apiUrl
      };
    }

    default:{
      return state;
    }
  }
};
