const { mutipleMongooseToObject } = require("../../util/mongoose");
const CourseSchema = require("../models/CourseSchema");
class MeController {
    storedCourses(req, res, next) {
        CourseSchema.find({})
            .then((courses) => {
                res.render("me/stored-courses", { courses: mutipleMongooseToObject(courses) });
            })
            .catch(next);
        // res.render("me/stored-courses", { courses: mutipleMongooseToObject(CourseSchema) });
    }
}

module.exports = new MeController();
