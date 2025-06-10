const { mutipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
const CourseSchema = require("../models/CourseSchema");

class CourseController {
    // GET /course
    index(req, res, next) {
        console.log(123);

        CourseSchema.find({})
            .then((courses) => {
                // news = mutipleMongooseToObject(news);
                res.render("course", { courses: mutipleMongooseToObject(courses) });
            })
            .catch(next);
    }
    // GET /course/:slug
    show(req, res, next) {
        CourseSchema.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render("courses/show", { courses: mongooseToObject(courses) });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render("courses/create");
    }
}

module.exports = new CourseController();
