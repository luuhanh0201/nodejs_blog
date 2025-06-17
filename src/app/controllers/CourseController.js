const { mutipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/CourseSchema");

class CourseController {
    // GET /courses
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // news = mutipleMongooseToObject(news);
                res.render("course", { courses: mutipleMongooseToObject(courses) });
            })
            .catch(next);
    }
    // GET /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
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
        const course = new Course(formData);
        course
            .save()
            .then(() => {
                res.redirect("/me/stored/courses");
            })
            .catch(next);
    }

    // [PUT] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => res.render("courses/edit", { course: mongooseToObject(course) }))
            .catch(next);
    }
    // [PUT] / courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }

    // [DELETE] / courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }
    // [PATCH] /:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }
    // [DELETE] /:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("/me/trash/courses"))
            .catch(next);
    }

    hanldeFormAction(req, res, next) {
        switch (req.body.action) {
            case "delete":
                Course.delete({ _id: { $in: req.body.courses_Id } })
                    .then(() => res.redirect("/me/stored/courses"))
                    .catch(next);
                break;
            case "destroy":
                Course.deleteOne({ _id: { $in: req.body.courses_Id } })
                    .then(() => res.redirect("/me/trash/courses"))
                    .catch(next);
                break;
            case "restore":
                Course.restore({ _id: { $in: req.body.courses_Id } })
                    .then(() => res.redirect("/me/stored/courses"))
                    .catch(next);
                break;
            default:
                res.json({ message: "action no invalid" });
        }
    }
}
module.exports = new CourseController();
