const userModel = require("../models/userModel");
const {userValidation} = require("../validation/joiValidation")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


const createUser = async(req,res)=>{
    try {
        let {name,email,password,isAuthor} = req.body;
        let result = userValidation.validate(req.body);
        if(result.error){
            return res.status(400).send({error:result.error.details[0].message})
        }
        let user = await userModel.findOne({email})
        if(user){
            return res.status(400).send({status:false,msg:"Email already exist"})
        }
        let hashPassword = await bcrypt.hash(password,10)
         user = await userModel.create({name,email,password:hashPassword,isAuthor});
        return res.status(201).send({status:true,msg:"user created",user})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const loginUser = async(req,res)=>{
    try {
        let {email,password} = req.body;
        if(email.length === 0 || password.length === 0){
            return res.status(400).send({status:false,msg:"Enter login details"})
        }
        let user = await userModel.findOne({email:email})
        if(! user ){
            return res.status(409).send({message : 'user not found'})
        } 
        let validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({message: "inValid password" });
        }
        const token = jwt.sign({id:user._id,name:user.name},process.env.JWT_KEY)
        return res.header("x-api-key",token).status(200).send({status:true,msg:"Login Successful"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports ={createUser,loginUser}