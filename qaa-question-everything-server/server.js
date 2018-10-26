const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const userApi = require('./routes/userApi');
const contentApi = require('./routes/contentApi');

app = express();

dotenv.config(); //makes the VARIABLE in .env file available here as process.env.VARIABLE

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/qaa';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });

// cors middleware
const corsOptions = {
  origin : process.env.CORS_ORIGIN
};
app.use(cors(corsOptions));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Logs all requests to the console
app.use((req,res,next) => {
  console.log(new Date(), req.method, req.url);
  next();
});

// routes to user and content apis
app.use('/api/user', userApi);
app.use('/api/content', contentApi);

// listen
app.set('port', PORT);
process.title = 'qaa-question-everything-server';
app.listen(app.get('port'), () => {
  console.log('********************************************************************');
  console.log('Server started on port ' + app.get('port'));
  console.log('This process is your pid ' + process.pid);
  console.log('This process is your process name ' + process.title);
  console.log('********************************************************************');
});

// if not any of the above end points
app.get('*', (req,res) => {
  res.send({
    success : false,
    message : "Error : Invalid end-point"
  });
});
