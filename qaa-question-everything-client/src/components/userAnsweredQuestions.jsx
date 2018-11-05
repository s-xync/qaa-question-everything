import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';
import QuestionThumbnail from './questionThumbnail';
import { appendAnsweredQuestion } from '../actions/questionsActions';

class UserAnsweredQuestions extends Component{

  componentDidMount(){
    if(this.props.validSession){
      for(let i = 0; i < this.props.questionIDs.length; i++){
        const questionID = this.props.questionIDs[i];
        axios.get(this.props.apiUrl+"/api/content/question", {
          params:{
            questionID : questionID
          }
        }).then((response) => {
          if(response.data.success){
            this.props.appendAnsweredQuestion(response.data.questionDetails);
          }else{
            console.log(response.data.message);
          }
        });
      }
    }
  }

  render(){
    return(
      <Fragment>
        { this.props.answeredQuestionsArray.map((question) =>
          <QuestionThumbnail key={question.questionID} questionID={question.questionID} />
        ) }
      </Fragment>
    );
  }
}

UserAnsweredQuestions.propTypes = {
  questionIDs : propTypes.array.isRequired,
  validSession : propTypes.bool.isRequired,
  apiUrl : propTypes.string.isRequired,
  answeredQuestionsArray : propTypes.array.isRequired,
  appendAnsweredQuestion : propTypes.func.isRequired
};

const mapStateToProps = ({ user, apiUrl, questions }) => ({
  questionIDs : user.answeredQuestionIDs,
  validSession : user.validSession,
  apiUrl : apiUrl.value,
  answeredQuestionsArray : questions.answeredQuestionsArray
});

export default connect(mapStateToProps, { appendAnsweredQuestion })(UserAnsweredQuestions);
