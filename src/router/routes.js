const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const authorController = require("../controller/userController");
const auth = require("../middleware/auth")


router.post("/api/user", authorController.createUser); 
router.post("/api/login", authorController.loginUser); 

router.post("/api/course",auth.auth, courseController.createCourse); 
router.get("/api/course", courseController.findCourse); 
router.get("/api/course/:id", courseController.findCourse); 
router.put("/api/course",auth.auth, courseController.updateCourse); 
router.delete("/api/course",auth.auth, courseController.deleteCourse); 




module.exports = router;
