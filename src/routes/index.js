const courseRouter = require("./course");
const SiteController = require("./site");
function route(app) {
    app.use("/courses", courseRouter);
    app.use("/", SiteController);

    // app.get("/", (req, res) => {
    //     res.render("home");
    // });
    // app.get("/search", (req, res) => {
    //     res.render("search");
    // });
}
module.exports = route;
