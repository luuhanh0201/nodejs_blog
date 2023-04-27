class CompanyController {
    index(req, res) {
        res.render('company');
    }
    detail(req, res) {
        res.send('Detail company');
    }
}

module.exports = new CompanyController();
