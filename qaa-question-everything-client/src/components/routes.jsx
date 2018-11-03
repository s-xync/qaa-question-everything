import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import SignupPage from './signupPage';
import LoginPage from './loginPage';

class Routes extends Component{
  
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

export default Routes;
