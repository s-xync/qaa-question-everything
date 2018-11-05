import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { resetStateOfAskQuestion, setHeadOfAskQuestion, setBodyOfAskQuestion, setAskQuestionDone } from '../actions/askQuestionActions';
import { setGetSessionFlag } from '../actions/userActions';

class AskQuestion extends Component{

  componentWillMount(){
    this.props.resetStateOfAskQuestion();
  }

  handleAskSubmit = (e) => {
    e.preventDefault();
    const { apiUrl , userID, validSession, headAskQuestion, bodyAskQuestion, headAskQuestionFlag, bodyAskQuestionFlag } = this.props;
    if(validSession && headAskQuestionFlag && bodyAskQuestionFlag){
      axios.post(apiUrl+'/api/content/addquestion', {
        userID : userID,
        head : headAskQuestion,
        body : bodyAskQuestion
      }).then((response) => {
        if(response.data.success){
          this.props.setGetSessionFlag(true);
          this.props.setAskQuestionDone();
        }else{
          console.log(response.data.message);
        }
      });
    }
  }

  renderRedirectAskQuestionDone = () => {
    if(this.props.askQuestionDone){
      return <Redirect to="/" />
    }
  };

  render(){
    return(
      <Fragment>
        { this.renderRedirectAskQuestionDone() }
        <hr className="my-4"/>
        <h1 style={{textAlign:"center"}}>Ask A Question</h1>
        <hr className="my-4"/>
        <form>
          <div className="form-group">
            <label htmlFor="headAskQuestion">Question Head</label>
            <textarea type="text" className="form-control" id="headAskQuestion" aria-describedby="headAskQuestionHelp" placeholder="My question is..." value={this.props.headAskQuestion} onChange={this.props.setHeadOfAskQuestion} required></textarea>
            <small id="headAskQuestionHelp" className={"form-text "+this.props.headAskQuestionHelpClass}>{this.props.headAskQuestionHelp}</small>
          </div>
          <div className="form-group">
            <label htmlFor="bodyAskQuestion">Question Body</label>
            <textarea type="text" className="form-control" id="bodyAskQuestion" aria-describedby="bodyAskQuestionHelp" placeholder="The details are..." value={this.props.bodyAskQuestion} onChange={this.props.setBodyOfAskQuestion} required></textarea>
            <small id="bodyAskQuestionHelp" className={"form-text "+this.props.bodyAskQuestionHelpClass}>{this.props.bodyAskQuestionHelp}</small>
          </div>
          <br/>
          <div style={{textAlign:"center"}}>
            <button type="submit" className="btn btn-primary btn-lg" disabled={!(this.props.headAskQuestionFlag && this.props.bodyAskQuestionFlag)} onClick={this.handleAskSubmit}>Ask</button>
          </div>
          <hr className="my-4"/>
          <br/>
        </form>
      </Fragment>
    );
  }
}

AskQuestion.propTypes = {
  apiUrl : propTypes.string.isRequired,
  validSession : propTypes.bool.isRequired,
  userID : propTypes.string.isRequired,
  headAskQuestion : propTypes.string.isRequired,
  headAskQuestionHelp : propTypes.string.isRequired,
  headAskQuestionHelpClass : propTypes.string.isRequired,
  bodyAskQuestion : propTypes.string.isRequired,
  bodyAskQuestionHelp : propTypes.string.isRequired,
  bodyAskQuestionHelpClass : propTypes.string.isRequired,
  headAskQuestionFlag : propTypes.bool.isRequired,
  bodyAskQuestionFlag : propTypes.bool.isRequired,
  askQuestionDone : propTypes.bool.isRequired,
  resetStateOfAskQuestion : propTypes.func.isRequired,
  setHeadOfAskQuestion : propTypes.func.isRequired,
  setBodyOfAskQuestion : propTypes.func.isRequired,
  setGetSessionFlag : propTypes.func.isRequired,
  setAskQuestionDone : propTypes.func.isRequired
};

const mapStateToProps = ({ apiUrl, user, askQuestion }) => ({
  apiUrl : apiUrl.value,
  validSession : user.validSession,
  userID : user.userID,
  headAskQuestion : askQuestion.headAskQuestion,
  headAskQuestionHelp : askQuestion.headAskQuestionHelp,
  headAskQuestionHelpClass : askQuestion.headAskQuestionHelpClass,
  bodyAskQuestion : askQuestion.bodyAskQuestion,
  bodyAskQuestionHelp : askQuestion.bodyAskQuestionHelp,
  bodyAskQuestionHelpClass : askQuestion.bodyAskQuestionHelpClass,
  headAskQuestionFlag : askQuestion.headAskQuestionFlag,
  bodyAskQuestionFlag : askQuestion.bodyAskQuestionFlag,
  askQuestionDone : askQuestion.askQuestionDone
});

export default connect(mapStateToProps, { resetStateOfAskQuestion, setHeadOfAskQuestion, setBodyOfAskQuestion, setGetSessionFlag, setAskQuestionDone })(AskQuestion);
