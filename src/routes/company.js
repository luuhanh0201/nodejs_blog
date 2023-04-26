const express = require('express')
const router = express.Router()

const companyController = require('../app/controllers/CompanyController')


router.use('/:slug', companyController.detail)
router.use('/', companyController.index)


module.exports = router