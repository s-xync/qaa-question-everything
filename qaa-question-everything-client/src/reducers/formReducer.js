import { SET_SIGNUP_INPUT_FIRSTNAME, SET_SIGNUP_INPUT_LASTNAME, SET_SIGNUP_INPUT_EMAIL, SET_SIGNUP_INPUT_PASSWORD } from '../actions/types';

const initialState = {
  signupInputFirstname : "",
  signupFirstnameHelpClass : "",
  signupFirstnameHelp : "",
  signupInputLastname : "",
  signupLastnameHelpClass : "",
  signupLastnameHelp : "",
  signupInputEmail : "",
  signupEmailHelpClass : "",
  signupEmailHelp : "",
  signupInputPassword : "",
  signupPasswordHelpClass : "",
  signupPasswordHelp : ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_INPUT_FIRSTNAME:
    return {
      ...state,
      signupInputFirstname : action.payload.signupInputFirstname,
      signupFirstnameHelpClass : action.payload.signupFirstnameHelpClass,
      signupFirstnameHelp : action.payload.signupFirstnameHelp
    }
    case SET_SIGNUP_INPUT_LASTNAME:
    return {
      ...state,
      signupInputLastname : action.payload.signupInputLastname,
      signupLastnameHelpClass : action.payload.signupLastnameHelpClass,
      signupLastnameHelp : action.payload.signupLastnameHelp
    }
    case SET_SIGNUP_INPUT_EMAIL:
    return {
      ...state,
      signupInputEmail : action.payload.signupInputEmail,
      signupEmailHelpClass : action.payload.signupEmailHelpClass,
      signupEmailHelp : action.payload.signupEmailHelp
    }
    case SET_SIGNUP_INPUT_PASSWORD:
    return {
      ...state,
      signupInputPassword : action.payload.signupInputPassword,
      signupPasswordHelpClass : action.payload.signupPasswordHelpClass,
      signupPasswordHelp : action.payload.signupPasswordHelp
    }
    default:
    return state;
  }
}
