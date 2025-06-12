const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

// newsController.index;
router.get("/create", courseController.create);        // Ưu tiên route tĩnh trước
router.post("/store", courseController.store);

router.get("/:id/edit", courseController.edit);        // Route có cấu trúc cụ thể hơn
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);

router.get("/", courseController.index);               // Route gốc
router.get("/:slug", courseController.show);           // Cuối cùng: dynamic slug

module.exports = router;
