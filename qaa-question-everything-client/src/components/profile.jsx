import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { setValidSession, removeStateOfUser } from '../actions/userActions';

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
          this.props.removeStateOfUser();
        }else{
          console.log(response.data.message);
        }
      });
    }else{
      this.props.setValidSession(false);
    }
  }

  renderRedirectNotValidSession = () => {
    if(!this.props.validSession){
      return <Redirect to="/" />
    }
  };

  render(){
    return(
      <Fragment>
        { this.renderRedirectNotValidSession() }
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
  validSession : propTypes.bool.isRequired,
  firstName : propTypes.string,
  lastName : propTypes.string
};

const mapStateToProps = ({ apiUrl, user }) => ({
  apiUrl : apiUrl.value,
  validSession : user.validSession,
  firstName : user.firstName,
  lastName : user.lastName
});

export default connect(mapStateToProps, { setValidSession, removeStateOfUser })(Profile);
