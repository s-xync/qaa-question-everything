import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { resetStateOfAskQuestion, setHeadOfAskQuestion, setBodyOfAskQuestion } from '../actions/askQuestionActions';

class AskQuestion extends Component{

  componentWillMount(){
    this.props.resetStateOfAskQuestion();
  }

  render(){
    return(
      <Fragment>
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

const mapStateToProps = ({ user, askQuestion }) => ({
  userID : user.userID,
  headAskQuestion : askQuestion.headAskQuestion,
  headAskQuestionHelp : askQuestion.headAskQuestionHelp,
  headAskQuestionHelpClass : askQuestion.headAskQuestionHelpClass,
  bodyAskQuestion : askQuestion.bodyAskQuestion,
  bodyAskQuestionHelp : askQuestion.bodyAskQuestionHelp,
  bodyAskQuestionHelpClass : askQuestion.bodyAskQuestionHelpClass,
  headAskQuestionFlag : askQuestion.headAskQuestionFlag,
  bodyAskQuestionFlag : askQuestion.bodyAskQuestionFlag
});

export default connect(mapStateToProps, { resetStateOfAskQuestion, setHeadOfAskQuestion, setBodyOfAskQuestion })(AskQuestion);
