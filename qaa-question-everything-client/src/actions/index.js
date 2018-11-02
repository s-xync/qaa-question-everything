import { TOGGLE_ISOPEN } from './types.js';

export const toggleIsOpen = () => (dispatch) => {
  dispatch({
    type : TOGGLE_ISOPEN,
    payload : null
  });
};
