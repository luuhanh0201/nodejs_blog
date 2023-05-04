class DigitalMktController {
    index(req, res) {
        res.render('digitalMkt');
    }
    detail(req, res) {
        res.send('Detail mkt');
    }
}

module.exports = new DigitalMktController();
