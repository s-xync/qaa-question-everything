const express = require('express');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');


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
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err){
      console.log(err);
      return res.json({
        success : false,
        message : "Error : Internal server error"
      });
    }else{
      const passwordHash = hash;
      const newUser = {
        firstName : firstName,
        lastName : lastName,
        email: email,
        passwordHash : passwordHash
      };
      User.addUser(newUser, (err, user) => {
        if(err){
          // comes from catch blocks of mongoose objects
          res.json({
            success : false,
            message : "Error : " + err.message
          });
        }else{
          res.json({
            success : true,
            message : "User registered successfully"
          });
        }

      });
    }
  });
});

module.exports = userApiRouter;
