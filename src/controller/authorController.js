const authorSchema = require("../models/authorModel");
const {authorValidation} = require("../validation/joiValidation")


const createAuthor = async(req,res)=>{
    try {
        let {name,email,password,specialization} = req.body;
        let result = authorValidation.validate(req.body);
        if(result.error){
            return res.status(400).send({error:result.error.details[0].message})
        }
        let author = await authorSchema.findOne({email})
        if(author){
            return res.status(400).send({status:false,msg:"Email already exist"})
        }
         author = await authorSchema.create(req.body);
        return res.status(201).send({status:true,msg:"Author created",author})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const loginAuthor = async(req,res)=>{
    try {
        let {email,password} = req.body;
        if(email.length === 0 || password.length === 0){
            return res.status(400).send({status:false,msg:"Enter login details"})
        }
        let author = await authorSchema.findOne({email,password})
        if(!author){
            return res.status(400).send({status:false,msg:"Email or password wrong"})
        }
        return res.status(200).send({status:true,msg:"Author created",author})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports ={createAuthor,loginAuthor}