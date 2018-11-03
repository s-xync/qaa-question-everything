import React, { Component, Fragment } from 'react';
import NavBar from './navBar';
import Signup from './signup';


class SignupPage extends Component{
  render(){
    return(
      <Fragment>
        <NavBar />
        <div className="row" style={{marginTop:'10%'}}>
          <div className="col"></div>
          <div className="col-4">
            <Signup />
          </div>
          <div className="col"></div>
        </div>
      </Fragment>
    );
  }
}

export default SignupPage;
