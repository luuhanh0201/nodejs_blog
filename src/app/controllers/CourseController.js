const { mutipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
const CourseSchema = require("../models/CourseSchema");

class CourseController {
    // GET /courses
    index(req, res, next) {
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
    // GET /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new CourseSchema(formData);
        course
            .save()
            .then(() => {
                res.redirect("/courses");
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
            .then(() => res.redirect("/courses"))
            .catch(next);
    }

    // [DELETE] / courses/:id
    delete(req, res, next) {
        CourseSchema.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
