const express = require('express');
const router = express.Router();

const digitalMktController = require('../app/controllers/DigitalMktController');

router.get('/:slug', digitalMktController.detail);
router.get('/', digitalMktController.index);

module.exports = router;
