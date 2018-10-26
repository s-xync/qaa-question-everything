const express = require('express');

const userApiRouter = express.Router();

userApiRouter.get('/test', (req,res) => {
  res.send({
    success : true,
    message: "user test"
  });

});

module.exports = userApiRouter;
