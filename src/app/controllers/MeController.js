const { mutipleMongooseToObject } = require("../../util/mongoose");
const CourseSchema = require("../models/CourseSchema");
class MeController {
    // [GET] me/stored/courses

    storedCourses(req, res, next) {
        Promise.all([CourseSchema.find({}), CourseSchema.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) =>
                // console.log(deletedCount)
                res.render("me/stored-courses", {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] me/trash/courses
    trashCourses(req, res, next) {
        CourseSchema.findWithDeleted({ deleted: true })
            .then((courses) => {
                res.render("me/trash-courses", {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // [PUT] /courses/:id/edit
    edit(req, res, next) {
        CourseSchema.findById(req.params.id)
            .then((course) => res.render("courses/edit", { course: mongooseToObject(course) }))
            .catch(next);
    }
    // [PUT] / courses/:id
    update(req, res, next) {
        CourseSchema.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }
}

module.exports = new MeController();
