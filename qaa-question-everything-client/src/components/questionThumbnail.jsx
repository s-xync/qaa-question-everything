import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class QuestionThumbnail extends Component{

  render(){
    const { questionID, head, body, userID, votes } = this.props.askedQuestions[this.props.questionID];
    return(
      <Fragment>
        <br/>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{head}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Questioned by {userID} and has {votes} vote(s)</h6>
            <p className="card-text">{body}</p>
            <Link to={"/question/"+questionID} className="card-link">Full Details</Link>
          </div>
        </div>
        <br/>
      </Fragment>
    );
  }
}

QuestionThumbnail.propTypes = {
  askedQuestions : propTypes.object,
  questionID : propTypes.string
};

const mapStateToProps = ({ questions }) => ({
  askedQuestions : questions.askedQuestions
});

export default connect(mapStateToProps, {  })(QuestionThumbnail);
