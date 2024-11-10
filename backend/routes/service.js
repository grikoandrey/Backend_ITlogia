const express = require('express');
const serviceController = require('../controllers/service');
const router = express.Router();

router.get('/', serviceController.getIndex);

module.exports = router;