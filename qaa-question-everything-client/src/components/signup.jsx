import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSignupInputFirstname, setSignupInputLastname, setSignupInputEmail, setSignupInputPassword } from '../actions/formActions';

class Signup extends Component {
  render(){
    return(
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="signupInputFirstname">Firstname</label>
            <input type="text" className="form-control" id="signupInputFirstname" aria-describedby="signupFirstnameHelp" placeholder="Firstname" value={this.props.signupInputFirstname} onChange={this.props.setSignupInputFirstname} required/>
            <small id="signupFirstnameHelp" className={"form-text "+this.props.signupFirstnameHelpClass}>{this.props.signupFirstnameHelp}</small>
          </div>
          <div className="form-group">
            <label htmlFor="signupInputLastname">Lastname</label>
            <input type="text" className="form-control" id="signupInputLastname" aria-describedby="signupLastnameHelp" placeholder="Lastname" value={this.props.signupInputLastname} onChange={this.props.setSignupInputLastname} required/>
            <small id="signupLastnameHelp" className={"form-text "+this.props.signupLastnameHelpClass}>{this.props.signupLastnameHelp}</small>
          </div>
          <div className="form-group">
            <label htmlFor="signupInputEmail">Email address</label>
            <input type="email" className="form-control" id="signupInputEmail" aria-describedby="signupEmailHelp" placeholder="Email" value={this.props.signupInputEmail} onChange={this.props.setSignupInputEmail} required/>
            <small id="signupEmailHelp" className={"form-text "+this.props.signupEmailHelpClass}>{this.props.signupEmailHelp}</small>
          </div>
          <div className="form-group">
            <label htmlFor="signupInputPassword">Password</label>
            <input type="password" className="form-control" id="signupInputPassword" aria-describedby="signupPasswordHelp" placeholder="Password" value={this.props.signupInputPassword} onChange={this.props.setSignupInputPassword} required/>
            <small id="signupPasswordHelp" className={"form-text "+this.props.signupPasswordHelpClass}>{this.props.signupPasswordHelp}</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  setSignupInputFirstname : propTypes.func.isRequired,
  signupInputFirstname : propTypes.string.isRequired,
  signupFirstnameHelpClass : propTypes.string.isRequired,
  signupFirstnameHelp : propTypes.string.isRequired,
  setSignupInputLastname : propTypes.func.isRequired,
  signupInputLastname : propTypes.string.isRequired,
  signupLastnameHelpClass : propTypes.string.isRequired,
  signupLastnameHelp : propTypes.string.isRequired,
  setSignupInputEmail : propTypes.func.isRequired,
  signupInputEmail : propTypes.string.isRequired,
  signupEmailHelpClass : propTypes.string.isRequired,
  signupEmailHelp : propTypes.string.isRequired,
  setSignupInputPassword : propTypes.func.isRequired,
  signupInputPassword : propTypes.string.isRequired,
  signupPasswordHelpClass : propTypes.string.isRequired,
  signupPasswordHelp : propTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  signupInputFirstname : state.accountForm.signupInputFirstname,
  signupFirstnameHelpClass : state.accountForm.signupFirstnameHelpClass,
  signupFirstnameHelp : state.accountForm.signupFirstnameHelp,
  signupInputLastname : state.accountForm.signupInputLastname,
  signupLastnameHelpClass : state.accountForm.signupLastnameHelpClass,
  signupLastnameHelp : state.accountForm.signupLastnameHelp,
  signupInputEmail : state.accountForm.signupInputEmail,
  signupEmailHelpClass : state.accountForm.signupEmailHelpClass,
  signupEmailHelp : state.accountForm.signupEmailHelp,
  signupInputPassword : state.accountForm.signupInputPassword,
  signupPasswordHelpClass : state.accountForm.signupPasswordHelpClass,
  signupPasswordHelp : state.accountForm.signupPasswordHelp
});

export default connect(mapStateToProps, { setSignupInputFirstname, setSignupInputLastname, setSignupInputEmail, setSignupInputPassword })(Signup);
