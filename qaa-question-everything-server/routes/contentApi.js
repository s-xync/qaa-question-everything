const express = require('express');

const User = require('../models/user.js');
const Question = require('../models/question.js');
const Answer = require('../models/answer.js');

const contentApiRouter = express.Router();

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
                    question.answerIDs.unshift(answer._id);
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

// GET /api/content/userquestions
contentApiRouter.get('/userquestions',
(req, res) => {

});

// GET /api/content/useranswers
contentApiRouter.get('/useranswers',
(req, res) => {

});

// GET /api/content/questionanswers
contentApiRouter.get('/questionanswers',
(req, res) => {

});

module.exports = contentApiRouter;
