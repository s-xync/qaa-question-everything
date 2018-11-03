import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { resetStateOfSignupLogin, setSignupInputFirstname, setSignupInputLastname, setSignupInputEmail, setSignupInputPassword, setSignupDone } from '../actions/formActions';

class Signup extends Component {

  componentWillMount(){
    this.props.resetStateOfSignupLogin();
  }

  handleSignupSubmit = (e) => {
    e.preventDefault();
    const { apiUrl, signupInputFirstname, signupInputLastname, signupInputEmail, signupInputPassword, signupFirstnameFlag, signupLastnameFlag, signupEmailFlag, signupPasswordFlag } = this.props;
    if(signupFirstnameFlag && signupLastnameFlag && signupEmailFlag && signupPasswordFlag){
      axios.post(apiUrl+'/api/user/signup',{
        firstName : signupInputFirstname,
        lastName : signupInputLastname,
        email : signupInputEmail,
        password : signupInputPassword
      }).then((response) => {
        if(response.data.success){
          this.props.setSignupDone();
        }else{
          console.log(response.data.message);
          this.props.resetStateOfSignupLogin();
        }
      });
    }
  };

  renderRedirectSignupDone = () => {
    if(this.props.signupDone){
      return <Redirect to="/login" />
    }
  };

  render(){
    return(
      <Fragment>
        { this.renderRedirectSignupDone() }
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
          <button type="submit" className="btn btn-primary" disabled={!(this.props.signupFirstnameFlag && this.props.signupLastnameFlag && this.props.signupEmailFlag && this.props.signupPasswordFlag)} onClick={this.handleSignupSubmit}>Submit</button>
        </form>
      </Fragment>
    );
  }
}

Signup.propTypes = {
  apiUrl : propTypes.string.isRequired,
  resetStateOfSignupLogin : propTypes.func.isRequired,
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
  signupPasswordHelp : propTypes.string.isRequired,
  signupFirstnameFlag : propTypes.bool.isRequired,
  signupLastnameFlag : propTypes.bool.isRequired,
  signupEmailFlag : propTypes.bool.isRequired,
  signupPasswordFlag : propTypes.bool.isRequired,
  signupDone : propTypes.bool.isRequired,
  setSignupDone : propTypes.func.isRequired
};

// { accountForm } = state
const mapStateToProps = ({accountForm, apiUrl}) => ({
apiUrl : apiUrl.value,
signupInputFirstname : accountForm.signupInputFirstname,
signupFirstnameHelpClass : accountForm.signupFirstnameHelpClass,
signupFirstnameHelp : accountForm.signupFirstnameHelp,
signupInputLastname : accountForm.signupInputLastname,
signupLastnameHelpClass : accountForm.signupLastnameHelpClass,
signupLastnameHelp : accountForm.signupLastnameHelp,
signupInputEmail : accountForm.signupInputEmail,
signupEmailHelpClass : accountForm.signupEmailHelpClass,
signupEmailHelp : accountForm.signupEmailHelp,
signupInputPassword : accountForm.signupInputPassword,
signupPasswordHelpClass : accountForm.signupPasswordHelpClass,
signupPasswordHelp : accountForm.signupPasswordHelp,
signupFirstnameFlag : accountForm.signupFirstnameFlag,
signupLastnameFlag : accountForm.signupLastnameFlag,
signupEmailFlag : accountForm.signupEmailFlag,
signupPasswordFlag : accountForm.signupPasswordFlag,
signupDone : accountForm.signupDone
});

export default connect(mapStateToProps, { setSignupInputFirstname, setSignupInputLastname, setSignupInputEmail, setSignupInputPassword, resetStateOfSignupLogin, setSignupDone })(Signup);
