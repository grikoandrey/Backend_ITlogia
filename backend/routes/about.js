const express = require('express');
const aboutController = require('../controllers/about');
const router = express.Router();

router.get('/', aboutController.getIndex);

module.exports = router;