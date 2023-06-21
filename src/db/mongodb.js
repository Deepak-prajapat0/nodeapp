require("dotenv").config({path:"config.env"})

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)