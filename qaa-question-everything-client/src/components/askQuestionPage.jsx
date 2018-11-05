import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './navBar';
import AskQuestion from './askQuestion';

class AskQuestionPage extends Component {

  render(){
    if(this.props.validSession){
      return(
        <Fragment>
          <NavBar />
          <div className="row" style={{marginTop:'3%'}}>
            <div className="col"></div>
            <div className="col-4">
              <AskQuestion />
            </div>
            <div className="col"></div>
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

AskQuestionPage.propTypes = {
  validSession : propTypes.bool.isRequired
};

const mapStateToProps = ({ user }) => ({
  validSession : user.validSession
});

export default connect(mapStateToProps, {  })(AskQuestionPage);
