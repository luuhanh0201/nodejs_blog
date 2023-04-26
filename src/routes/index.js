const technologyRouter = require('./technology')
const siteRouter = require('./site')
const learnRouter = require('./learn')
function router(app) {
    app.use('/technology', technologyRouter)
    app.use('/learn',learnRouter)
    // app.get('/', technologyRouter)

    app.get('/',siteRouter)
    
}

module.exports = router;