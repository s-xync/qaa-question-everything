import React, { Component } from 'react';
import NavBar from './navBar';
import Login from './login';


class LoginPage extends Component{
  render(){
    return(
      <div>
      <NavBar />
      <div className="row" style={{marginTop:'10%'}}>
        <div className="col"></div>
        <div className="col-6">
          <Login />
        </div>
        <div className="col"></div>
      </div>
      </div>
    );
  }
}

export default LoginPage;
