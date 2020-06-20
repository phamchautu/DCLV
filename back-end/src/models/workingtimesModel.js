var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var WorkingtimeSchema = new Schema({
  idDoctor:{
    type: String
  },
  workingTime:{
    type: [Number]
  }

},{
    collection: 'workingtimes'
});

const Workingtime = mongoose.model('WorkingtimeSchema', WorkingtimeSchema);
module.exports = Workingtime;
