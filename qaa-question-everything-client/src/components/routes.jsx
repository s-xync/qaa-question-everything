import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';

class Routes extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={App} />
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
