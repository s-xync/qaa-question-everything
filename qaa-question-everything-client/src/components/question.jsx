import React, { Component, Fragment } from 'react';

class Question extends Component{

  render(){
    return(
      <Fragment>
        {this.props.questionID}
      </Fragment>
    );
  }
}

export default Question;
