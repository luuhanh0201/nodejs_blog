const express = require('express')
const router = express.Router()
const aboutMeController = require('../app/controllers/AboutMeController');

router.use('/', aboutMeController.index);

module.exports = router;
