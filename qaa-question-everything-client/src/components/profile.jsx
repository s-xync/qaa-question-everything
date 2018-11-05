import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { setValidSession, resetStateOfUser } from '../actions/userActions';
import { resetStateOfQuestions } from '../actions/questionsActions';

class Profile extends Component{

  handleLogoutSubmit = (e) => {
    if(localStorage.getItem('QAA_LOGIN_TOKEN')){
      const qaaLoginToken = JSON.parse(localStorage.getItem('QAA_LOGIN_TOKEN'));
      axios.post(this.props.apiUrl+'/api/user/signout', {
        token : qaaLoginToken
      }).then((response) => {
        if(response.data.success){
          localStorage.removeItem('QAA_LOGIN_TOKEN');
          this.props.setValidSession(false);
          this.props.resetStateOfUser();
        }else{
          console.log(response.data.message);
        }
      });
    }else{
      this.props.setValidSession(false);
    }
  }

  componentWillUnmount(){
    if(this.props.validSession){
      this.props.resetStateOfQuestions();
    }
  }

  render(){
    return(
      <Fragment>
        <div className="row" style={{textAlign:"center"}}>
          <div className="col-8">
            <h3>{this.props.firstName + " " + this.props.lastName}</h3>
          </div>
          <div className="col-4">
            <button className="btn btn-danger" onClick={this.handleLogoutSubmit}>Logout</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

Profile.propTypes = {
  apiUrl : propTypes.string.isRequired,
  firstName : propTypes.string.isRequired,
  lastName : propTypes.string.isRequired,
  validSession : propTypes.bool.isRequired,
  setValidSession : propTypes.func.isRequired,
  resetStateOfUser : propTypes.func.isRequired,
  resetStateOfQuestions : propTypes.func.isRequired
};

const mapStateToProps = ({ apiUrl, user }) => ({
  apiUrl : apiUrl.value,
  firstName : user.firstName,
  lastName : user.lastName,
  validSession : user.validSession
});

export default connect(mapStateToProps, { setValidSession, resetStateOfUser, resetStateOfQuestions })(Profile);
