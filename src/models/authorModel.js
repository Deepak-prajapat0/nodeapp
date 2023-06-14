const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
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
    maxLength: 50,
  },
  specialization: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
});

module.exports = mongoose.model("Author", authorSchema);
