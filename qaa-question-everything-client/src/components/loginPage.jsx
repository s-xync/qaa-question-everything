import React, { Component, Fragment } from 'react';
import NavBar from './navBar';
import Login from './login';


class LoginPage extends Component{
  render(){
    return(
      <Fragment>
        <NavBar />
        <div className="row" style={{marginTop:'10%'}}>
          <div className="col"></div>
          <div className="col-4">
            <Login />
          </div>
          <div className="col"></div>
        </div>
      </Fragment>
    );
  }
}

export default LoginPage;
