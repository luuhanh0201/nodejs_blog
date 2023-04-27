class TechnologyController {
  //  /technology
  index(req, res) {
    res.render('technology');
  }
  // /technology/:slug
  show(req, res) {
    res.send('technology detail');
  }
}

module.exports = new TechnologyController();
