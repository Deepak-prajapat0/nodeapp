const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
      trim:true
    },
    tags: {
      type: Array,
      trim: true,
      validate: {
        validator: function (x) {
          return x && x.length > 0;
        },
      },
      message: "Tags are required",
    },
    price: { type: Number, trim: true, required: true, min: 200, max: 2000 },
    isPublished: { type: Boolean, trim: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
