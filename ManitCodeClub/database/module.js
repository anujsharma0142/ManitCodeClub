

const mongoose = require('mongoose');

// define Schema
const RegisterSchema = mongoose.Schema({
    userid: String,
    userpassword: String,
  });
  
  // compile schema to model
module.exports = mongoose.model('user',RegisterSchema)
