const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

// newsController.index;
router.get("/create", courseController.create);        // Ưu tiên route tĩnh trước
router.post("/store", courseController.store);

router.post("/handle-form-action",courseController.hanldeFormAction)
router.get("/:id/edit", courseController.edit);        // Route có cấu trúc cụ thể hơn
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.delete);
router.delete("/:id/force", courseController.forceDestroy);

router.get("/", courseController.index);               // Route gốc
router.get("/:slug", courseController.show);           // Cuối cùng: dynamic slug

module.exports = router;
