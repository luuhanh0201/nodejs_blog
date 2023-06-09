const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/about-me', siteController.about);
router.use('/', siteController.home);

module.exports = router;
