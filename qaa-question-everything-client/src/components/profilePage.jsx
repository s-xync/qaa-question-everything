import React, { Component, Fragment } from 'react';
import NavBar from './navBar';
import Profile from './profile';

class ProfilePage extends Component {

  render(){
    return(
      <Fragment>
        <NavBar />
        <div className="container"  style={{marginTop:'3%'}}>
          <Profile />
        </div>
      </Fragment>
    );
  }
}

export default ProfilePage;
