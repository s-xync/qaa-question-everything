const mongoose = require('mongoose');

const userSessionSchema = mongoose.Schema({
  userID : {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
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

const UserSession = module.exports = mongoose.model('UserSession', userSessionSchema);
