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
  questions : {
    type : [mongoose.Schema.Types.ObjectId]
  },
  answers : {
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

User.addUser = (newUser, callback) => {
  const query = {
    email : newUser.email
  };
  User.find(query, (err, users) => {
    if(err){
      console.log(err);
    }else if(users.length != 0){
      try {
        throw ({
          "message" : "Email already exists"
        });
      }catch(e){
        callback(e);
      }
    }else{
      User.create(newUser, callback);
    }
  });
}
