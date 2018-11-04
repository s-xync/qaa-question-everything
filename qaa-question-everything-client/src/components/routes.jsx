import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import App from './app';
import SignupPage from './signupPage';
import LoginPage from './loginPage';
import { setApiUrl } from '../actions/apiUrlActions';

class Routes extends Component{

  componentWillMount(){
    this.props.setApiUrl(process.env.REACT_APP_SERVER_API_URL);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.apiUrl !== this.props.apiUrl){
      this.checkAndGetSession();
    }
  }

  checkAndGetSession = () => {
    if(this.props.apiUrl){
      if(localStorage.getItem('QAA_LOGIN_TOKEN')){
        const qaaLoginToken = JSON.parse(localStorage.getItem('QAA_LOGIN_TOKEN'));
        axios.get(this.props.apiUrl+"/api/user/getsession",{
          params:{
            token : qaaLoginToken
          }
        }).then(response => console.log(response));
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
  setApiUrl : propTypes.func.isRequired
}

const mapStateToProps = ({apiUrl}) => ({
  apiUrl : apiUrl.value
});

export default connect(mapStateToProps, { setApiUrl })(Routes);
