const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 100,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 6,
  },
  isAuthor:{
    type:Boolean,
    trim:true,
    required:true
  }
});

module.exports = mongoose.model("User", userSchema);
