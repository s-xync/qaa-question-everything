import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import App from './app';
import SignupPage from './signupPage';
import LoginPage from './loginPage';
import { setApiUrl } from '../actions/apiUrlActions';
import { setValidSession } from '../actions/userActions';

class Routes extends Component{

  componentWillMount(){
    this.props.setApiUrl(process.env.REACT_APP_SERVER_API_URL);
  }

  componentDidUpdate(prevProps, prevState){
    if((prevProps.apiUrl !== this.props.apiUrl) && this.props.apiUrl){
      this.checkSession();
    }

    if((prevProps.validSession !== this.props.validSession) && this.props.validSession){
      this.getSession();
    }
  }

  checkSession = () => {
    if(this.props.apiUrl){
      if(localStorage.getItem('QAA_LOGIN_TOKEN')){
        const qaaLoginToken = JSON.parse(localStorage.getItem('QAA_LOGIN_TOKEN'));
        axios.get(this.props.apiUrl+"/api/user/checksession",{
          params:{
            token : qaaLoginToken
          }
        }).then((response) => {
          if(response.data.success){
            this.props.setValidSession(true);
          }else{
            this.props.setValidSession(false);
            localStorage.removeItem('QAA_LOGIN_TOKEN');
            console.log(response.data.message);
          }
        });
      }
    }
  };

  getSession = () => {
    if(this.props.apiUrl){
      if(localStorage.getItem('QAA_LOGIN_TOKEN')){
        const qaaLoginToken = JSON.parse(localStorage.getItem('QAA_LOGIN_TOKEN'));
        axios.get(this.props.apiUrl+"/api/user/getsession",{
          params:{
            token : qaaLoginToken
          }
        }).then((response) => {
          if(response.data.success){
            // this.props.setUserDetails(response.data.userDetails)
          }else{
            this.props.setValidSession(false);
            localStorage.removeItem('QAA_LOGIN_TOKEN');
            console.log(response.data.message);
          }
        });
      }
    }
  };

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.propTypes = {
  apiUrl : propTypes.string.isRequired,
  setApiUrl : propTypes.func.isRequired,
  setValidSession : propTypes.func.isRequired,
  validSession : propTypes.bool.isRequired
}

const mapStateToProps = ({ apiUrl, user }) => ({
  apiUrl : apiUrl.value,
  validSession : user.validSession
});

export default connect(mapStateToProps, { setApiUrl, setValidSession })(Routes);
