import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';
import QuestionThumbnail from './questionThumbnail';
import { appendAskedQuestion } from '../actions/questionsActions';

class UserAskedQuestions extends Component{

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

UserAskedQuestions.propTypes = {
  questionIDs : propTypes.array.isRequired,
  validSession : propTypes.bool.isRequired,
  apiUrl : propTypes.string.isRequired,
  askedQuestionsArray : propTypes.array.isRequired,
  appendAskedQuestion : propTypes.func.isRequired
};

const mapStateToProps = ({ user, apiUrl, questions }) => ({
  questionIDs : user.questionIDs,
  validSession : user.validSession,
  apiUrl : apiUrl.value,
  askedQuestionsArray : questions.askedQuestionsArray
});

export default connect(mapStateToProps, { appendAskedQuestion })(UserAskedQuestions);
