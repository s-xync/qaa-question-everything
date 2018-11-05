const express = require('express');

const User = require('../models/user.js');
const Question = require('../models/question.js');
const Answer = require('../models/answer.js');

const contentApiRouter = express.Router();

/*
* POST /api/content/addquestion
* POST /api/content/addanswer
* POST /api/content/votequestion
* POST /api/content/voteanswer
* GET /api/content/question
* GET /api/content/answer
*/

// POST /api/content/addquestion
contentApiRouter.post('/addquestion',
(req, res) => {
  const { userID, head, body } = req.body;
  if(head.length > 25){
    const query = {
      _id : userID,
      isDeleted : false
    };
    User.find(query, (err, users) => {
      if(err){
        console.log(err);
        return res.json({
          success : false,
          message : "Internal server error"
        });
      }else if(users.length != 1){
        return res.json({
          success : false,
          message :"User not found"
        });
      }
      else{
        let user = users[0];
        const newQuestion = { userID, head, body };
        Question.create(newQuestion, (err, question) => {
          if(err){
            console.log(err);
            return res.json({
              success : false,
              message : "Internal server error"
            });
          }else{
            user.questionIDs.unshift(question._id);
            user.save((err) => {
              if(err){
                console.log(err);
                return res.json({
                  success : false,
                  message : "Internal server error"
                });
              }else{
                return res.json({
                  success : true,
                  message : "Question added successfully"
                });
              }
            });
          }
        });
      }
    });
  }else{
    return res.json({
      success : false,
      message : "Question cannot be short"
    });
  }
});

// POST /api/content/addanswer
contentApiRouter.post('/addanswer',
(req, res) => {
  const { userID, questionID, body } = req.body;
  if(body.length > 25){
    const query = {
      _id : userID,
      isDeleted : false
    };
    User.find(query, (err, users) => {
      if(err){
        console.log(err);
        return res.json({
          success : false,
          message : "Internal server error"
        });
      }else if(users.length != 1){
        return res.json({
          success : false,
          message : "User not found"
        });
      }else{
        const query = {
          _id : questionID,
          isDeleted : false
        }
        Question.find(query, (err, questions) => {
          if(err){
            console.log(err);
            return res.json({
              success : false,
              message : "Internal server error"
            });
          }else if(questions.length != 1){
            return res.json({
              success : false,
              message : "Question not found"
            });
          }else{
            let user = users[0];
            let question = questions[0];
            const newAnswer = { userID, questionID, body };
            Answer.create(newAnswer, (err, answer) => {
              if(err){
                console.log(err);
                return res.json({
                  success : false,
                  message : "Internal server error"
                });
              }else{
                user.answerIDs.unshift(answer._id);
                user.save((err) => {
                  if(err){
                    console.log(err);
                    return res.json({
                      success : false,
                      message : "Internal server error"
                    });
                  }else{
                    question.answeredQuestionIDs.unshift(questionID);
                    question.save((err) => {
                      if(err){
                        console.log(err);
                        return res.json({
                          success : false,
                          message : "Internal server error"
                        });
                      }else{
                        return res.json({
                          success : true,
                          message : "Answer added successfully"
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }else{
    return res.json({
      success : false,
      message : "Answer cannot be short"
    });
  }
});

// POST /api/content/votequestion
contentApiRouter.post('/votequestion',
(req, res) => {
  const { questionID, type } = req.body;
  const query = {
    _id : questionID,
    isDeleted : false
  };

  Question.find(query, (err, questions) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else if(questions.length != 1){
      return res.json({
        success : false,
        message : "Question not found"
      });
    }else{
      let question = questions[0];
      if(type === "up"){
        question.votes = question.votes + 1;
      }else if(type === "down"){
        question.votes = question.votes - 1;
      }else{
        return res.json({
          success : false,
          message : "Not a valid type of vote"
        });
      }
      question.save((err) => {
        if(err){
          console.log(err);
          return res.json({
            success : false,
            message : "Internal server error"
          });
        }else{
          return res.json({
            success : true,
            message : "Voted successfully"
          });
        }
      });
    }
  });
});

// POST /api/content/voteanswer
contentApiRouter.post('/voteanswer',
(req, res) => {
  const { answerID, type } = req.body;
  const query = {
    _id : answerID,
    isDeleted : false
  };

  Answer.find(query, (err, answers) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else if(answers.length != 1){
      return res.json({
        success : false,
        message : "Answer not found"
      });
    }else{
      let answer = answers[0];
      if(type === "up"){
        answer.votes = answer.votes + 1;
      }else if(type === "down"){
        answer.votes = answer.votes - 1;
      }else{
        return res.json({
          success : false,
          message : "Not a valid type of vote"
        });
      }
      answer.save((err) => {
        if(err){
          console.log(err);
          return res.json({
            success : false,
            message : "Internal server error"
          });
        }else{
          return res.json({
            success : true,
            message : "Voted successfully"
          });
        }
      });
    }
  });
});

// GET /api/content/question
contentApiRouter.get('/question',
(req, res) => {
  const { questionID } = req.query;
  const query = {
    _id : questionID,
    isDeleted : false
  };
  Question.find(query, (err, questions) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else if(questions.length != 1){
      return res.json({
        success : false,
        message : "Question not found"
      });
    }else{
      const { _id, head, body, votes, answerIDs, userID } = questions[0];
      const questionID = _id;
      const retrievedQuestionDetails = { questionID, head, body, votes, answerIDs, userID };
      return res.json({
        success : true,
        message : "Question found",
        questionDetails : retrievedQuestionDetails
      });
    }
  });
});

// GET /api/content/answer
contentApiRouter.get('/answer',
(req, res) => {
  const { answerID } = req.query;
  const query = {
    _id : answerID,
    isDeleted : false
  };
  Answer.find(query, (err, answers) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else if(answers.length != 1){
      return res.json({
        success : false,
        message : "Answer not found"
      });
    }else{
      const { _id, body, votes, questionID, userID } = answers[0];
      const answerID = _id;
      const retrievedAnswerDetails = { answerID, body, votes, questionID, userID };
      return res.json({
        success : true,
        message : "Answer found",
        answerDetails : retrievedAnswerDetails
      });
    }
  });
});

module.exports = contentApiRouter;
