import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import App from './app';
import SignupPage from './signupPage';
import LoginPage from './loginPage';
import { setApiUrl } from '../actions/apiUrlActions';

class Routes extends Component{

  componentWillMount(){
    this.props.setApiUrl(process.env.REACT_APP_SERVER_API_URL);
  }

  // componentDidMount(){
  //   axios.get('http://localhost:8080/api/user/getsession',{
  //     params : {
  //       token : "5bd71dbc5f708a61e0e74f0e"
  //     }
  //   }).then(response => console.log(response));
  // }

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

export default connect(null, { setApiUrl })(Routes);
