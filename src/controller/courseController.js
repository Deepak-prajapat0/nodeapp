const courseSchema = require('../models/courseModel')
const {courseValidation} = require('../validation/joiValidation')
const authorSchema = require("../models/authorModel")

const createCourse = async(req,res)=>{
    try {
        let {name,author,tags,price,isPublished} = req.body;
        let authorExist=  await authorSchema.findById(author);
        if(!authorExist){
            return res.status(400).send({status:false,msg:"No author found with this id"})
        }
        let result = courseValidation.validate(req.body)
        if(result.error){
            return res.status(400).send({error:result.error.details[0].message})
        }
        let newCourse = await courseSchema.create(req.body)
        return res.status(201).send({status:true,msg:"Course created sucessfully",newCourse});

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
        let id = req.params.id;
        let course = await courseSchema.findById(id).populate("author","-__v").select({__v:0})
        if(!course){
            return res.status(404).send({status:false,msg:"no course found with this course Id"})
        }
        
        return res.status(200).send({status:true,course})
        
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