class SiteController {
    index(req, res) {
        res.render('home');
    }
    about(req, res) {
        res.render('about-me');
    }
}

module.exports = new SiteController();
