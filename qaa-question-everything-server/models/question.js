const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  userID : {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
  },
  head : {
    type : String,
    require : true
  },
  detail : {
    type : String
  },
  votes : {
    type : Number,
    default : 0,
    required : true
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

const Question = module.exports = mongoose.model('Question', questionSchema);
