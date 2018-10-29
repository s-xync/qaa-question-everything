const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  passwordHash : {
    type : String,
    required : true
  },
  questionIDs : {
    type : [mongoose.Schema.Types.ObjectId]
  },
  answerIDs : {
    type : [mongoose.Schema.Types.ObjectId]
  },
  createdOn : {
    type : Date,
    default : Date.now(),
    required : true
  },
  isDeleted : {
    type : Boolean,
    default : false,
    required : true
  }
});

const User = module.exports = mongoose.model('User', userSchema);
