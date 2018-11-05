import React, { Component, Fragment } from 'react';

class Question extends Component{

  render(){
    return(
      <Fragment>
        {this.props.match.params._id}
      </Fragment>
    );
  }
}

export default Question;
