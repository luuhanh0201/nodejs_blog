const express = require('express')
const router = express.Router()

const technologyController = require('../app/controllers/TechnologyController')


// technologyController.index
router.use("/:slug",technologyController.show)
router.use("/",technologyController.index)

module.exports = router