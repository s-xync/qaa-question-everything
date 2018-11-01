import { GET_SESSION } from '../actions/types.js';

export default (state = {user : {}}, action) => {
  switch(action.type){
    case GET_SESSION:
    return state;
    default:
    return state;
  }
}
