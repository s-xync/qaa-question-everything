const express = require('express');

const contentApiRouter = express.Router();

contentApiRouter.get('/test', (req,res) => {
  res.send({
    success : true,
    message: "content test"
  });
});

module.exports = contentApiRouter;
