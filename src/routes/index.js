const CourseRouter = require("./course");
const SiteController = require("./site");
const MeController = require("./me");
function route(app) {
    app.use("/me",MeController)
    app.use("/courses", CourseRouter);
    app.use("/", SiteController);

    // app.get("/", (req, res) => {
    //     res.render("home");
    // });
    // app.get("/search", (req, res) => {
    //     res.render("search");
    // });
}
module.exports = route;
