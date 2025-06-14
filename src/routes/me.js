const express = require("express");
const MeController = require("../app/controllers/MeController");
const router = express.Router();

// newsController.index;
router.get("/stored/courses", MeController.storedCourses);
router.get("/trash/courses", MeController.trashCourses);
// router.get("/stored/courses", MeController.storedCourses);

module.exports = router;
