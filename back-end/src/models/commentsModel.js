var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var CommentSchema = new Schema({
  idUser:{
    type: String
  },
  idRelated:{
    type: String
  },
  comment:{
    type: String
  }

},{
    collection: 'comments'
});

const Comment = mongoose.model('CommentSchema', CommentSchema);
module.exports = Comment;
