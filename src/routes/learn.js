const express = require('express');
const router = express.Router();

const learnController = require('../app/controllers/LearnController');

router.use('/:slug',learnController.detail)
router.use('/',learnController.index)

module.exports = router