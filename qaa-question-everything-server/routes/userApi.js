const express = require('express');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

const User = require('../models/user.js');
const UserSession = require('../models/userSession.js')

const saltRounds = 10;

const userApiRouter = express.Router();

// /api/user/signup
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
      message : "Error : Invalid" + errorString
    });
  }

  let { firstName, lastName, email, password } = req.body;
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = lastName ? lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase() : lastName;
  email = email.toLowerCase();
  const passwordHash = bcrypt.hashSync(password, saltRounds);
  const newUser = {
    firstName : firstName,
    lastName : lastName,
    email: email,
    passwordHash : passwordHash
  };

  User.addUser(newUser, (err, user) => {
    if(err){
      // comes from catch blocks of mongoose objects
      return res.json({
        success : false,
        message : "Error : " + err.message
      });
    }else{
      return res.json({
        success : true,
        message : "User registered successfully"
      });
    }
  });
});

// /api/user/signin
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

// /api/user/getsession
userApiRouter.post('/getsession',
(req, res) => {
  const { token } = req.body;
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
              const { _id, firstName, lastName, email, questionIDs, answerIDs } = users[0];
              const userDetails = { _id, firstName, lastName, email, questionIDs, answerIDs };
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

// /api/user/signout
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
