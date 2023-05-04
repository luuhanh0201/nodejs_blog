
class SiteController {
    home(req, res,next) {
        res.render('home');
    }
    about(req, res) {
        res.render('about-me');
    }
}

module.exports = new SiteController();
