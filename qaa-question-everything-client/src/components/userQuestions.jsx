import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class UserQuestions extends Component{

  render(){
    return(
      <Fragment>
        { console.log(this.props.questionIDs) }
      </Fragment>
    );
  }
}



const mapStateToProps = ({ user }) => ({
  questionIDs : user.questionIDs
});

export default connect(mapStateToProps, {  })(UserQuestions);
