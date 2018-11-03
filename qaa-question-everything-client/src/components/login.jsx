import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetStateOfSignupLogin, setLoginInputEmail, setLoginInputPassword } from '../actions/formActions';

class Login extends Component {

  componentWillMount(){
    this.props.resetStateOfSignupLogin();
  }

  render(){
    return(
      <Fragment>
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
          <button type="submit" className="btn btn-primary" disabled={!(this.props.loginEmailFlag && this.props.loginPasswordFlag)}>Submit</button>
        </form>
      </Fragment>
    );
  }
}

Login.propTypes = {
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
  loginPasswordFlag : propTypes.bool.isRequired
};

// { accountForm } = state
const mapStateToProps = ({accountForm}) => ({
loginInputEmail : accountForm.loginInputEmail,
loginEmailHelpClass : accountForm.loginEmailHelpClass,
loginEmailHelp : accountForm.loginEmailHelp,
loginInputPassword : accountForm.loginInputPassword,
loginPasswordHelpClass : accountForm.loginPasswordHelpClass,
loginPasswordHelp : accountForm.loginPasswordHelp,
loginEmailFlag : accountForm.loginEmailFlag,
loginPasswordFlag : accountForm.loginPasswordFlag
});

export default connect(mapStateToProps, { setLoginInputEmail, setLoginInputPassword, resetStateOfSignupLogin })(Login);
