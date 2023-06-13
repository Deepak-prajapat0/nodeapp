const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
        maxLength: 15,
      },
    specialization:{
        type: String,
        trim: true,
        required: true,
        minLength: 3,
        maxLength: 15,
    }
})

module.exports = mongoose.model("Author",authorSchema)