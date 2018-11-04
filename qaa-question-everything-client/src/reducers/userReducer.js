import { SET_VALID_SESSION } from '../actions/types.js';

const initialState = {
  validSession : false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_VALID_SESSION:
    return {
      ...state,
      validSession : true
    };

    default:
    return state;
  }
};
