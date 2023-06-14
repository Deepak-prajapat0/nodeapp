const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const authorController = require("../controller/authorController");

router.post("/api/course", courseController.createCourse); 
router.get("/api/course", courseController.findCourse); 
router.get("/api/course/:id", courseController.findCourse); 
router.put("/api/course", courseController.updateCourse); 
router.delete("/api/course", courseController.deleteCourse); 


router.post("/api/author", authorController.createAuthor); 
router.post("/api/author-login", authorController.loginAuthor); 



module.exports = router;
