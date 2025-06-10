class SiteController {
    index(req, res, next) {
        res.render("home");
    }

    search(req, res,next) {
        res.render("search");
    }
}

module.exports = new SiteController();
