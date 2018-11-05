import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './navBar';
import Profile from './profile';
import UserQuestions from './userQuestions';

class ProfilePage extends Component {

  render(){
    if(this.props.validSession){
      return(
        <Fragment>
          <NavBar />
          <div className="container" style={{marginTop:'3%'}}>
            <Profile />
            <UserQuestions />
          </div>
        </Fragment>
      );
    }else{
      return(
        <Fragment>
          <Redirect to="/" />
        </Fragment>
      );
    }
  }
}

ProfilePage.propTypes = {
  validSession : propTypes.bool.isRequired
};

const mapStateToProps = ({ user }) => ({
  validSession : user.validSession
});

export default connect(mapStateToProps, {  })(ProfilePage);
