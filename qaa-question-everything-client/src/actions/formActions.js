import { SET_SIGNUP_INPUT_FIRSTNAME, SET_SIGNUP_INPUT_LASTNAME, SET_SIGNUP_INPUT_EMAIL, SET_SIGNUP_INPUT_PASSWORD, SET_LOGIN_INPUT_EMAIL, SET_LOGIN_INPUT_PASSWORD } from './types';

export const setSignupInputFirstname = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 0){
    dispatch({
      type : SET_SIGNUP_INPUT_FIRSTNAME,
      payload : {
        signupInputFirstname : value,
        signupFirstnameHelpClass : "text-success",
        signupFirstnameHelp : "Validated",
        signupFirstnameFlag : true
      }
    });
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_FIRSTNAME,
      payload : {
        signupInputFirstname : value,
        signupFirstnameHelpClass : "text-danger",
        signupFirstnameHelp : "Firstname cannot be empty",
        signupFirstnameFlag : false
      }
    });
  }
};

export const setSignupInputLastname = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 0){
    dispatch({
      type : SET_SIGNUP_INPUT_LASTNAME,
      payload : {
        signupInputLastname : value,
        signupLastnameHelpClass : "text-success",
        signupLastnameHelp : "Validated",
        signupLastnameFlag : true
      }
    });
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_LASTNAME,
      payload : {
        signupInputLastname : value,
        signupLastnameHelpClass : "text-danger",
        signupLastnameHelp : "Lastname cannot be empty",
        signupLastnameFlag : false
      }
    });
  }
};

export const setSignupInputEmail = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 0){
    if(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      dispatch({
        type : SET_SIGNUP_INPUT_EMAIL,
        payload : {
          signupInputEmail : value,
          signupEmailHelpClass : "text-success",
          signupEmailHelp : "Validated",
          signupEmailFlag : true
        }
      });
    }else{
      dispatch({
        type : SET_SIGNUP_INPUT_EMAIL,
        payload : {
          signupInputEmail : value,
          signupEmailHelpClass : "text-danger",
          signupEmailHelp : "Has to be an email",
          signupEmailFlag : false
        }
      });
    }
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_EMAIL,
      payload : {
        signupInputEmail : value,
        signupEmailHelpClass : "text-danger",
        signupEmailHelp : "Email cannot be empty",
        signupEmailFlag : false
      }
    });
  }
};

export const setSignupInputPassword = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length >= 6){
    dispatch({
      type : SET_SIGNUP_INPUT_PASSWORD,
      payload : {
        signupInputPassword : value,
        signupPasswordHelpClass : "text-success",
        signupPasswordHelp : "Validated",
        signupPasswordFlag : true
      }
    });
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_PASSWORD,
      payload : {
        signupInputPassword : value,
        signupPasswordHelpClass : "text-danger",
        signupPasswordHelp : "Password has to be atleast 6 characters",
        signupPasswordFlag : false
      }
    });
  }
};

export const setLoginInputEmail = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 0){
    if(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      dispatch({
        type : SET_LOGIN_INPUT_EMAIL,
        payload : {
          loginInputEmail : value,
          loginEmailHelpClass : "text-success",
          loginEmailHelp : "Validated",
          loginEmailFlag : true
        }
      });
    }else{
      dispatch({
        type : SET_LOGIN_INPUT_EMAIL,
        payload : {
          loginInputEmail : value,
          loginEmailHelpClass : "text-danger",
          loginEmailHelp : "Has to be an email",
          loginEmailFlag : false
        }
      });
    }
  }else{
    dispatch({
      type : SET_LOGIN_INPUT_EMAIL,
      payload : {
        loginInputEmail : value,
        loginEmailHelpClass : "text-danger",
        loginEmailHelp : "Email cannot be empty",
        loginEmailFlag : false
      }
    });
  }
};

export const setLoginInputPassword = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length >= 6){
    dispatch({
      type : SET_LOGIN_INPUT_PASSWORD,
      payload : {
        loginInputPassword : value,
        loginPasswordHelpClass : "text-success",
        loginPasswordHelp : "Validated",
        loginPasswordFlag : true
      }
    });
  }else{
    dispatch({
      type : SET_LOGIN_INPUT_PASSWORD,
      payload : {
        loginInputPassword : value,
        loginPasswordHelpClass : "text-danger",
        loginPasswordHelp : "Password has to be atleast 6 characters",
        loginPasswordFlag : false
      }
    });
  }
};
