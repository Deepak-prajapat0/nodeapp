const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require('./router/routes')

app.use(express.json());
app.use('/',routes)

mongoose.connect("mongodb+srv://deepak-prajapat:vgyw5qKnzICsud2R@cluster0.qildr1s.mongodb.net/courses")
.then(()=>console.log("MongoDb is connected ..."))
.catch((error)=>console.log("error",error))

app.listen(3000,()=>{
    console.log("App is running on port 3000")
})