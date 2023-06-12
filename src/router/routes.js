const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

router.post("/api/course", courseController.createCourse); 
router.get("/api/course", courseController.findCourse); 
router.put("/api/course", courseController.updateCourse); 
router.delete("/api/course", courseController.deleteCourse); 

module.exports = router;
