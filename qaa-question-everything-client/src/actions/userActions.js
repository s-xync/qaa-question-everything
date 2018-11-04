import { SET_VALID_SESSION } from './types';

export const setValidSession = () => (dispatch) => {
  dispatch({
    type : SET_VALID_SESSION,
    payload : null
  });
}
