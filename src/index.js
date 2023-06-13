const express = require('express');
const { default: mongoose } = require('mongoose');
const app= express();
const routes = require("./router/routes")

app.use(express.json());
app.use('/',routes);

mongoose.connect("mongodb+srv://deepak-prajapat:vgyw5qKnzICsud2R@cluster0.qildr1s.mongodb.net/node+mongoose")
.then(()=>console.log("Database connected ..."))
.catch((error)=>console.log({error:error.message}))

app.listen(3001,()=>{
    console.log("App is running on 3001")
})