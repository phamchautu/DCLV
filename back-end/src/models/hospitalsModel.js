var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var HospitalSchema = new Schema({
  idHospital:{
    type: String
  },
  image :{
    type: String
  },
  name: {
    type: String
  },
  address:{
    type: String
  },
  // CO the la benh vien / doi tac
  cooperation:{
    type :[String]
  }
},{
    collection: 'hospitals'
});

const Hospital = mongoose.model('HospitalSchema', HospitalSchema);
module.exports = Hospital;
