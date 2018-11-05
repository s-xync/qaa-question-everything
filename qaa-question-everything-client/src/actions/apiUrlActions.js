import { SET_API_URL } from './types';

export const setApiUrl = (apiUrl) => (dispatch) => {
  dispatch({
    type : SET_API_URL,
    payload : { apiUrl }
  });
};
