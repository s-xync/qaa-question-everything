import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './navBar';
import Login from './login';


class LoginPage extends Component{

  render(){
    if(this.props.validSession){
      return(
        <Fragment>
          return <Redirect to="/" />
        </Fragment>
      );
    }else{
      return(
        <Fragment>
          <NavBar />
          <div className="row" style={{marginTop:'3%'}}>
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
}

LoginPage.propTypes = {
  validSession : propTypes.bool.isRequired
};

const mapStateToProps = ({ user }) => ({
  validSession : user.validSession
});

export default connect(mapStateToProps, {  })(LoginPage);
