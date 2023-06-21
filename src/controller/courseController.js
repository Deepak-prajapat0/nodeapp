const courseModel = require('../models/courseModel')
const {courseValidation} = require('../validation/joiValidation')
const userModel = require("../models/userModel")

const createCourse = async(req,res)=>{
    try {
        let {name,tags,price,isPublished} = req.body;
        let result = courseValidation.validate(req.body)
        if(result.error){
            return res.status(400).send({error:result.error.details[0].message})
        }
        let id = req.id
        let authorExist=  await userModel.findById(id);
        if(!authorExist){
            return res.status(400).send({status:false,msg:"No user found with this id"})
        }
        if(authorExist.isAuthor === false){
            return res.status(403).send({status:false,msg:"You are not allowed to create course"})
        }
        let newCourse = await courseModel.create({name,tags,author:id,price,isPublished})
        return res.status(201).send({status:true,msg:"Course created sucessfully",newCourse});

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const findCourse =async(req,res)=>{
    try {
        // let courses = await courseModel.find().and([{tags:"backend"},{tags:"frontend"}])
        // let courses = await courseModel.find({price:{$lt:400}})
        // let courses = await courseModel.find({price:{$gt:400}})
        // let courses = await courseModel.find({price:{$eq:800}})
        // let courses = await courseModel.findById(id)
        // let courses = await courseModel.findOne({name:"Mosh"})
        let id = req.params.id;
        // let course = await courseModel.findById(id).populate("author","-__v").select({__v:0})
        const course = await courseModel.find();
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
        let {courseId,name,tags,price,isPublished} = req.body
        let userId = req.id;
        let user=  await userModel.findById(userId);
        if(!user){
            return res.status(400).send({status:false,msg:"No user found with this id"})
        }
        if(user.isAuthor === false){
            return res.status(403).send({status:false,msg:"You are not allowed to update course"})
        }
        let course = await courseModel.findById(courseId);
        console.log(course)
        if(course.author != userId){
            return res.status(403).send({status:false,msg:"You are not allowed to update course"})
        }
        let updatedCourse = await courseModel.findOneAndUpdate({_id:courseId},{name,tags,price,isPublished},{new:true});
        return res.status(200).send({status:true,updatedCourse});
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}
const deleteCourse = async(req,res)=>{
    try {
        let userId = req.id;
        let courseId = req.body.courseId;
        let user=  await userModel.findById(userId);
        if(!user){
            return res.status(400).send({status:false,msg:"No user found with this id"})
        }
        if(user.isAuthor === false){
            return res.status(403).send({status:false,msg:"You are not allowed to do such operations"})
        }
        let course = await courseModel.findById(courseId);
        if(course.author != userId){
            return res.status(403).send({status:false,msg:"You are not allowed to delete course"})
        }
        let deletedCourse = await courseModel.findOneAndDelete({_id:courseId});
        return res.send({status:true,deletedCourse});
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}
module.exports={createCourse,findCourse,updateCourse,deleteCourse}