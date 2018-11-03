import { SET_SIGNUP_INPUT_FIRSTNAME, SET_SIGNUP_INPUT_LASTNAME, SET_SIGNUP_INPUT_EMAIL, SET_SIGNUP_INPUT_PASSWORD } from './types';

export const setSignupInputFirstname = (event) => (dispatch) => {
  const { value } = event.target;
  if(value.length > 0){
    dispatch({
      type : SET_SIGNUP_INPUT_FIRSTNAME,
      payload : {
        signupInputFirstname : value,
        signupFirstnameHelpClass : "text-success",
        signupFirstnameHelp : "Validated"
      }
    });
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_FIRSTNAME,
      payload : {
        signupInputFirstname : value,
        signupFirstnameHelpClass : "text-danger",
        signupFirstnameHelp : "Firstname cannot be empty"
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
        signupLastnameHelp : "Validated"
      }
    });
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_LASTNAME,
      payload : {
        signupInputLastname : value,
        signupLastnameHelpClass : "text-danger",
        signupLastnameHelp : "Lastname cannot be empty"
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
          signupEmailHelp : "Validated"
        }
      });
    }else{
      dispatch({
        type : SET_SIGNUP_INPUT_EMAIL,
        payload : {
          signupInputEmail : value,
          signupEmailHelpClass : "text-danger",
          signupEmailHelp : "Has to be an email"
        }
      });
    }
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_EMAIL,
      payload : {
        signupInputEmail : value,
        signupEmailHelpClass : "text-danger",
        signupEmailHelp : "Email cannot be empty"
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
        signupPasswordHelp : "Validated"
      }
    });
  }else{
    dispatch({
      type : SET_SIGNUP_INPUT_PASSWORD,
      payload : {
        signupInputPassword : value,
        signupPasswordHelpClass : "text-danger",
        signupPasswordHelp : "Password has to be atleast 6 characters"
      }
    });
  }
};
