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
