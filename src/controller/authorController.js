const authorSchema = require("../models/authorModel");
const {authorValidation} = require("../validation/joiValidation")


const createAuthor = async(req,res)=>{
    try {
        let data = req.body;
        let result = authorValidation.validate(data);
        if(result.error){
            return res.status(400).send({error:result.error.details[0].message})
        }
        let author = await authorSchema.create(data);
        return res.status(201).send({status:true,msg:"Author created",author})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports ={createAuthor}