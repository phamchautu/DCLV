var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var UserSchema = new Schema({
  id:{
    type : String
  },
  image :{
    type: String
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  phoneNumber: {
    type : String
  },
  dob : {
    type : Date,
  },
  gmail : {
    type :String
  },
  workAt :{
    type: [String]
  },
  achievement:{
      type : [String]
  },
  role:{
    type: String
  },
  hospital:{
    type: String
  },
  rate: {
    type: Number
  }
},{
    collection: 'users'
});

const User = mongoose.model('UserSchema', UserSchema);
module.exports = User;
