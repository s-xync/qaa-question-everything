import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLoginInputEmail, setLoginInputPassword } from '../actions/formActions';

class Login extends Component {
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

const mapStateToProps = (state) => ({
  loginInputEmail : state.accountForm.loginInputEmail,
  loginEmailHelpClass : state.accountForm.loginEmailHelpClass,
  loginEmailHelp : state.accountForm.loginEmailHelp,
  loginInputPassword : state.accountForm.loginInputPassword,
  loginPasswordHelpClass : state.accountForm.loginPasswordHelpClass,
  loginPasswordHelp : state.accountForm.loginPasswordHelp,
  loginEmailFlag : state.accountForm.loginEmailFlag,
  loginPasswordFlag : state.accountForm.loginPasswordFlag
});

export default connect(mapStateToProps, { setLoginInputEmail, setLoginInputPassword })(Login);
