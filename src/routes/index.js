const technologyRouter = require('./technology');
const siteRouter = require('./site');
const learnRouter = require('./learn');
const company = require('./company');
function router(app) {
  app.use('/technology', technologyRouter);
  app.use('/learn', learnRouter);
  app.use('/company', company);

  app.get('/about-me', siteRouter);
  app.get('/', siteRouter);
}

module.exports = router;
