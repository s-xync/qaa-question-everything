const express = require('express');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

const User = require('../models/user.js');
const UserSession = require('../models/userSession.js')

const saltRounds = 10;

const userApiRouter = express.Router();

/*
* POST /api/user/signup
* POST /api/user/signin
* GET /api/user/checksession
* GET /api/user/getsession
* POST /api/user/signout
*/

// POST /api/user/signup
userApiRouter.post('/signup',
[
  // firstName should exist
  check('firstName').exists().isLength({ min: 2 }),
  // email has to be of format email
  check('email').exists().isEmail(),
  // password must be at least 6 chars long
  check('password').isLength({ min: 6 })
],
(req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    let errorString = "";
    errors.array().forEach((item, index) => {
      errorString = errorString.concat(" " + item.param);
    });
    return res.json({
      success : false,
      message : "Invalid" + errorString
    });
  }

  let { firstName, lastName, email, password } = req.body;
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = lastName ? lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase() : lastName;
  email = email.toLowerCase();
  const passwordHash = bcrypt.hashSync(password, saltRounds);
  const newUser = { firstName, lastName, email, passwordHash };

  const query = {
    email : newUser.email
  };

  User.find(query, (err, users) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else if(users.length != 0){
      return res.json({
        success : false,
        message : "Email already exists"
      });
    }else{
      User.create(newUser, (err, user) => {
        if(err){
          return res.json({
            success : false,
            message : "Internal server error"
          });
        }else{
          return res.json({
            success : true,
            message : "User registered successfully"
          });
        }
      })
    }
  });
});

// POST /api/user/signin
userApiRouter.post('/signin',
(req, res) => {
  let { email, password } = req.body;
  const query = {
    email : email.toLowerCase(),
    isDeleted : false
  };

  User.find(query, (err, users) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else{
      if(users.length != 1){
        return res.json({
          success : false,
          message : "User not found"
        });
      }else{
        const retrievedUser = users[0];
        if(bcrypt.compareSync(password, retrievedUser.passwordHash)){
          newUserSession = {
            userID : retrievedUser._id
          };
          UserSession.create(newUserSession, (err, userSession) => {
            if(err){
              console.log(err);
              return res.json({
                success : false,
                message : "Internal server error"
              });
            }else{
              // the token has to be stored in client's local storage
              return res.json({
                success : true,
                message : "Signed in successfully",
                token : userSession._id
              });
            }
          });
        }else{
          return res.json({
            success : false,
            message : "Password did not match"
          });
        }
      }
    }
  });
});

// POST /api/user/checksession
userApiRouter.get('/checksession',
(req, res) => {
  const { token } = req.query;
  const query = {
    _id : token,
    isDeleted : false
  };
  UserSession.find(query, (err, userSessions) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else{
      if(userSessions.length != 1){
        return res.json({
          success : false,
          message : "Session not found"
        });
      }else{
        return res.json({
          success : true,
          message : "Session is valid"
        });
      }
    }
  });
});

// POST /api/user/getsession
userApiRouter.get('/getsession',
(req, res) => {
  const { token } = req.query;
  const query = {
    _id : token,
    isDeleted : false
  };
  UserSession.find(query, (err, userSessions) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else{
      if(userSessions.length != 1){
        return res.json({
          success : false,
          message : "Session not found"
        });
      }else{
        const { userID } = userSessions[0];
        const query = {
          _id : userID,
          isDeleted : false
        };
        User.find(query, (err, users) => {
          if(err){
            console.log(err);
            return res.json({
              success : false,
              message : "Internal sever error"
            });
          }else{
            if(users.length != 1){
              return res.json({
                success : false,
                message : "User not found"
              });
            }else{
              const { _id, firstName, lastName, email, questionIDs, answeredQuestionIDs } = users[0];
              const userID = _id;
              const userDetails = { userID, firstName, lastName, email, questionIDs, answeredQuestionIDs };
              return res.json({
                success : true,
                message : "Session found",
                userDetails : userDetails
              });
            }
          }
        });
      }
    }
  });
});

// POST /api/user/signout
userApiRouter.post('/signout',
(req, res) => {
  const { token } = req.body;
  const query = {
    _id : token
  };
  UserSession.deleteOne(query, (err) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else{
      return res.json({
        success : true,
        message : "Signed out successfully"
      });
    }
  });
});

module.exports = userApiRouter;
