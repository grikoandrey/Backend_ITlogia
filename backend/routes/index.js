const express = require('express');
const productRoutes = require('./service');
// const indexController = require('../controllers/index');

const router = express.Router({ mergeParams: true });

router.use('/service', productRoutes);

module.exports = router;