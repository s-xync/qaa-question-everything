import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';
import QuestionThumbnail from './questionThumbnail';
import { resetStateOfQuestions, appendAskedQuestion } from '../actions/questionsActions';

class UserQuestions extends Component{

  componentWillMount(){
    if(this.props.validSession){
      for(let i = 0; i < this.props.questionIDs.length; i++){
        const questionID = this.props.questionIDs[i];
        axios.get(this.props.apiUrl+"/api/content/question", {
          params:{
            questionID : questionID
          }
        }).then((response) => {
          if(response.data.success){
            this.props.appendAskedQuestion(response.data.questionDetails);
          }else{
            console.log(response.data.message);
          }
        });
      }
    }
  }

  componentWillUnmount(){
    if(this.props.validSession){
      this.props.resetStateOfQuestions();
    }
  }

  render(){
    return(
      <Fragment>
        { this.props.askedQuestionsArray.map((question) =>
          <QuestionThumbnail key={question.questionID} questionID={question.questionID} />
        ) }
      </Fragment>
    );
  }
}

UserQuestions.propTypes = {
  questionIDs : propTypes.array.isRequired,
  validSession : propTypes.bool.isRequired,
  apiUrl : propTypes.string.isRequired,
  askedQuestionsArray : propTypes.array.isRequired,
  resetStateOfQuestions : propTypes.func.isRequired,
  appendAskedQuestion : propTypes.func.isRequired
};

const mapStateToProps = ({ user, apiUrl, questions }) => ({
  questionIDs : user.questionIDs,
  validSession : user.validSession,
  apiUrl : apiUrl.value,
  askedQuestionsArray : questions.askedQuestionsArray
});

export default connect(mapStateToProps, { resetStateOfQuestions, appendAskedQuestion })(UserQuestions);
