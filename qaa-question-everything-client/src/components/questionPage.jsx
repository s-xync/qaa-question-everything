import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import NavBar from './navBar';
import Question from './question';

class QuestionPage extends Component{

  render(){
    const { questionID } = this.props.match.params;
    return(
      <Fragment>
        <NavBar />
        <div style={{marginTop:'3%', marginBottom:'3%'}}>
          <div className="container">
            <Question questionID={questionID} />
          </div>
        </div>
      </Fragment>
    );
  }
}

QuestionPage.propTypes = {
  match : propTypes.object.isRequired
}

export default QuestionPage;
