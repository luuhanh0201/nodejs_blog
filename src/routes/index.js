const technologyRouter = require('./technology');
const siteRouter = require('./site');
const aboutMeRouter = require('./about-me');
const digitalMktRouter = require('./digitalMkt');
const companyRouter = require('./company');
function router(app) {
    app.use('/technology', technologyRouter);
    app.use('/digital-marketing',digitalMktRouter);
    app.use('/company', companyRouter);
    app.use('/about-me', aboutMeRouter);
    app.use('/', siteRouter);
}
module.exports = router;
