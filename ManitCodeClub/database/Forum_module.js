


const mongoose = require('mongoose');

// define Schema
const CommentSchema = mongoose.Schema({
    userid: String,
    usercomment: String
  });
  
  // compile schema to model
module.exports = mongoose.model('user1',CommentSchema)
