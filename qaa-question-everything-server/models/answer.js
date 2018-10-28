const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  userID : {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
  },
  questionID : {
    type : mongoose.Schema.Types.ObjectId,
    require : true
  },
  body : {
    type : String,
    require : true
  },
  votes : {
    type : Number,
    default : 0,
    required : true
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

const Answer = module.exports = mongoose.model('Answer', answerSchema);
