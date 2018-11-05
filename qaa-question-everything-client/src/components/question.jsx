import React, { Component, Fragment } from 'react';

class Question extends Component{

  render(){
    return(
      <Fragment>
        <h6>
          Question ID - {this.props.questionID}
        </h6>
        <p>
          Question details, answers, votes, option to add new answer, option to add votes up or down.
        </p>
      </Fragment>
    );
  }
}

export default Question;
