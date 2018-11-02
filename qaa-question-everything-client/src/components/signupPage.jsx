import React, { Component } from 'react';
import NavBar from './navBar';
import Signup from './signup';


class SignupPage extends Component{
  render(){
    return(
      <div>
      <NavBar />
      <div className="row" style={{marginTop:'10%'}}>
        <div className="col"></div>
        <div className="col-6">
          <Signup />
        </div>
        <div className="col"></div>
      </div>
      </div>
    );
  }
}

export default SignupPage;
