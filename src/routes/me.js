const express = require("express");
const MeController = require("../app/controllers/meController");
const router = express.Router();

// newsController.index;
router.get("/stored/courses", MeController.storedCourses);
// router.get("/stored/courses", MeController.storedCourses);

module.exports = router;
