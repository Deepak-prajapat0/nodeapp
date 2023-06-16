const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require("dotenv");
const app= express();
const routes = require("./router/routes")


dotenv.config({path:"config.env"})
app.use(express.json());
app.use('/',routes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database connected ..."))
.catch((error)=>console.log({error:error.message}))

app.listen(process.env.PORT,()=>{
    console.log(`App is running on ${process.env.PORT}`)
})