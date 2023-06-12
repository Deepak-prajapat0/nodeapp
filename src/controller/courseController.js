const courseSchema = require('../models/model')

const createCourse = async(req,res)=>{
    try {
        let {name,course,tags,price,isPublished} = req.body;
        let courseSc = await courseSchema.create(req.body)
        return res.status(201).send({status:true,msg:"Course created sucessfully",data:req.body});

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const findCourse =async(req,res)=>{
    try {
        // let courses = await courseSchema.find().and([{tags:"backend"},{tags:"frontend"}])
        // let courses = await courseSchema.find({price:{$lt:400}})
        // let courses = await courseSchema.find({price:{$gt:400}})
        // let courses = await courseSchema.find({price:{$eq:800}})
        // let courses = await courseSchema.findById(id)
        // let courses = await courseSchema.findOne({name:"Mosh"})
        let courses = await courseSchema.findOne({name:"Mosh"})
        
        return res.status(200).send({status:true,courses})
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const updateCourse = async(req,res)=>{
    try {
        let id = req.query.id;
        let data = req.body

        let updatedCourse = await courseSchema.findOneAndUpdate({_id:id},data,{new:true});
        return res.status(200).send({status:true,updatedCourse});
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}
const deleteCourse = async(req,res)=>{
    try {
        let id = req.query.id;
        let deletedCourse = await courseSchema.findOneAndDelete({_id:id});
        return res.send({status:true,deletedCourse});
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}
module.exports={createCourse,findCourse,updateCourse,deleteCourse}