import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { resetStateOfSignupLogin, setLoginInputEmail, setLoginInputPassword } from '../actions/formActions';
import { setValidSession } from '../actions/userActions';

class Login extends Component {

  componentWillMount(){
    this.props.resetStateOfSignupLogin();
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { apiUrl, loginInputEmail, loginInputPassword, loginEmailFlag, loginPasswordFlag } = this.props;
    if(loginEmailFlag && loginPasswordFlag){
      axios.post(apiUrl+'/api/user/signin',{
        email : loginInputEmail,
        password : loginInputPassword
      }).then((response) => {
        if(response.data.success){
          localStorage.setItem('QAA_LOGIN_TOKEN',JSON.stringify(response.data.token));
          this.props.setValidSession();
        }else{
          console.log(response.data.message);
          this.props.resetStateOfSignupLogin();
        }
      });
    }
  };

  renderRedirectValidSession = () => {
    if(this.props.validSession){
      return <Redirect to="/" />
    }
  };

  render(){
    return(
      <Fragment>
        { this.renderRedirectValidSession() }
        <hr className="my-4"/>
        <h1 style={{textAlign:"center"}}>Login</h1>
        <hr className="my-4"/>
        <form>
          <div className="form-group">
            <label htmlFor="loginInputEmail">Email address</label>
            <input type="email" className="form-control" id="loginInputEmail" aria-describedby="loginEmailHelp" placeholder="Email" value={this.props.loginInputEmail} onChange={this.props.setLoginInputEmail} required/>
            <small id="loginEmailHelp" className={"form-text "+this.props.loginEmailHelpClass}>{this.props.loginEmailHelp}</small>
          </div>
          <div className="form-group">
            <label htmlFor="loginInputPassword">Password</label>
            <input type="password" className="form-control" id="loginInputPassword" aria-describedby="loginPasswordHelp" placeholder="Password" value={this.props.loginInputPassword} onChange={this.props.setLoginInputPassword} required/>
            <small id="loginPasswordHelp" className={"form-text "+this.props.loginPasswordHelpClass}>{this.props.loginPasswordHelp}</small>
          </div>
          <br/>
          <div style={{textAlign:"center"}}>
          <button type="submit" className="btn btn-primary btn-lg" disabled={!(this.props.loginEmailFlag && this.props.loginPasswordFlag)} onClick={this.handleLoginSubmit}>Submit</button>
        </div>
        <hr className="my-4"/>
        <br/>
        </form>
      </Fragment>
    );
  }
}

Login.propTypes = {
  apiUrl : propTypes.string.isRequired,
  resetStateOfSignupLogin : propTypes.func.isRequired,
  setLoginInputEmail : propTypes.func.isRequired,
  loginInputEmail : propTypes.string.isRequired,
  loginEmailHelpClass : propTypes.string.isRequired,
  loginEmailHelp : propTypes.string.isRequired,
  setLoginInputPassword : propTypes.func.isRequired,
  loginInputPassword : propTypes.string.isRequired,
  loginPasswordHelpClass : propTypes.string.isRequired,
  loginPasswordHelp : propTypes.string.isRequired,
  loginEmailFlag : propTypes.bool.isRequired,
  loginPasswordFlag : propTypes.bool.isRequired,
  setValidSession : propTypes.func.isRequired,
  validSession : propTypes.bool.isRequired
};

const mapStateToProps = ({ accountForm, apiUrl, user }) => ({
apiUrl : apiUrl.value,
loginInputEmail : accountForm.loginInputEmail,
loginEmailHelpClass : accountForm.loginEmailHelpClass,
loginEmailHelp : accountForm.loginEmailHelp,
loginInputPassword : accountForm.loginInputPassword,
loginPasswordHelpClass : accountForm.loginPasswordHelpClass,
loginPasswordHelp : accountForm.loginPasswordHelp,
loginEmailFlag : accountForm.loginEmailFlag,
loginPasswordFlag : accountForm.loginPasswordFlag,
validSession : user.validSession
});

export default connect(mapStateToProps, { setLoginInputEmail, setLoginInputPassword, resetStateOfSignupLogin, setValidSession })(Login);
