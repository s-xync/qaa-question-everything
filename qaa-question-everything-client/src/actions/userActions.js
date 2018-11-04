import { SET_VALID_SESSION } from './types';

export const setValidSession = (flag) => (dispatch) => {
  dispatch({
    type : SET_VALID_SESSION,
    payload : {
      flag : flag
    }
  });
}
