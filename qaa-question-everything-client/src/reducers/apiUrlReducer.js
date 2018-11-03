import { SET_API_URL } from '../actions/types';

export default (state = {value:""}, action) => {
  switch (action.type) {

    case SET_API_URL:
    return {
      ...state,
      value : action.payload.apiUrl
    };

    default:
    return state;
  }
};
