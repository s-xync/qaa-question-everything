import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './navBar';
import Profile from './profile';
import UserAskedQuestions from './userAskedQuestions';
import UserAnsweredQuestions from './userAnsweredQuestions';

class ProfilePage extends Component {

  render(){
    if(this.props.validSession){
      return(
        <Fragment>
          <NavBar />
          <div style={{marginTop:'3%', marginBottom:'3%'}}>
            <div className="container">
              <Profile />
            </div>
            <br/>
            <h1 style={{textAlign:"center"}}>Asked Questions</h1>
            <div className="container">
              <UserAskedQuestions />
            </div>
            <h1 style={{textAlign:"center"}}>Answered Questions</h1>
            <div className="container">
              <UserAnsweredQuestions />
            </div>
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
