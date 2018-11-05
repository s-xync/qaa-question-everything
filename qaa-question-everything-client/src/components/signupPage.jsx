import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './navBar';
import Signup from './signup';


class SignupPage extends Component{

  render(){
    if(this.props.validSession){
      return(
        <Fragment>
          return <Redirect to="/profile" />
        </Fragment>
      );
    }else{
      return(
        <Fragment>
          <NavBar />
          <div className="row" style={{marginTop:'3%'}}>
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
}

SignupPage.propTypes = {
  validSession : propTypes.bool.isRequired
};

const mapStateToProps = ({ user }) => ({
  validSession : user.validSession
});

export default connect(mapStateToProps, {  })(SignupPage);
