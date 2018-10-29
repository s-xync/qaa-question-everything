const express = require('express');

const User = require('../models/user.js');
const Question = require('../models/question.js');
const Answer = require('../models/answer.js');

const contentApiRouter = express.Router();

// POST /api/content/addquestion
contentApiRouter.post('/addquestion',
(req, res) => {

});

// POST /api/content/addanswer
contentApiRouter.post('/addanswer',
(req, res) => {

});

// POST /api/content/votequestion
contentApiRouter.post('/votequestion',
(req, res) => {

});

// POST /api/content/voteanswer
contentApiRouter.post('/voteanswer',
(req, res) => {

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
