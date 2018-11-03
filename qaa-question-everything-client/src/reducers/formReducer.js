import { RESET_STATE_OF_SIGNUP_LOGIN, SET_SIGNUP_INPUT_FIRSTNAME, SET_SIGNUP_INPUT_LASTNAME, SET_SIGNUP_INPUT_EMAIL, SET_SIGNUP_INPUT_PASSWORD, SET_LOGIN_INPUT_EMAIL, SET_LOGIN_INPUT_PASSWORD } from '../actions/types';

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
  signupPasswordHelp : "",
  signupFirstnameFlag : false,
  signupLastnameFlag : false,
  signupEmailFlag : false,
  signupPasswordFlag : false,
  loginInputEmail : "",
  loginEmailHelpClass : "",
  loginEmailHelp : "",
  loginInputPassword : "",
  loginPasswordHelpClass : "",
  loginPasswordHelp : "",
  loginEmailFlag : false,
  loginPasswordFlag : false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case RESET_STATE_OF_SIGNUP_LOGIN:
    return {
      ...initialState
    };

    case SET_SIGNUP_INPUT_FIRSTNAME:
    return {
      ...state,
      signupInputFirstname : action.payload.signupInputFirstname,
      signupFirstnameHelpClass : action.payload.signupFirstnameHelpClass,
      signupFirstnameHelp : action.payload.signupFirstnameHelp,
      signupFirstnameFlag : action.payload.signupFirstnameFlag
    };

    case SET_SIGNUP_INPUT_LASTNAME:
    return {
      ...state,
      signupInputLastname : action.payload.signupInputLastname,
      signupLastnameHelpClass : action.payload.signupLastnameHelpClass,
      signupLastnameHelp : action.payload.signupLastnameHelp,
      signupLastnameFlag : action.payload.signupLastnameFlag
    };

    case SET_SIGNUP_INPUT_EMAIL:
    return {
      ...state,
      signupInputEmail : action.payload.signupInputEmail,
      signupEmailHelpClass : action.payload.signupEmailHelpClass,
      signupEmailHelp : action.payload.signupEmailHelp,
      signupEmailFlag : action.payload.signupEmailFlag
    };

    case SET_SIGNUP_INPUT_PASSWORD:
    return {
      ...state,
      signupInputPassword : action.payload.signupInputPassword,
      signupPasswordHelpClass : action.payload.signupPasswordHelpClass,
      signupPasswordHelp : action.payload.signupPasswordHelp,
      signupPasswordFlag : action.payload.signupPasswordFlag
    };

    case SET_LOGIN_INPUT_EMAIL:
    return {
      ...state,
      loginInputEmail : action.payload.loginInputEmail,
      loginEmailHelpClass : action.payload.loginEmailHelpClass,
      loginEmailHelp : action.payload.loginEmailHelp,
      loginEmailFlag : action.payload.loginEmailFlag
    };

    case SET_LOGIN_INPUT_PASSWORD:
    return {
      ...state,
      loginInputPassword : action.payload.loginInputPassword,
      loginPasswordHelpClass : action.payload.loginPasswordHelpClass,
      loginPasswordHelp : action.payload.loginPasswordHelp,
      loginPasswordFlag : action.payload.loginPasswordFlag
    };

    default:
    return state;
  }
};
