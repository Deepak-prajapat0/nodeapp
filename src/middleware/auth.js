const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const auth = async(req,res,next)=>{
    try {
        let token = req.headers["x-api-key"];
        if(!token){
            return res.status(400).send({status:false,msg:"Token not found"})
        }
        let decoded =  jwt.verify(token,process.env.JWT_KEY);
        if(!decoded){
            return res.status(401).send({status:false,msg:"Invalid token found"})
        }
        req.id = decoded.id
        next()
    } catch (error) {
        return res.status(500).send({status:false,error:error.message})
    }
}
module.exports.auth=auth;