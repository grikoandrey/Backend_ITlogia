const express = require('express');
const serviceController = require('../controllers/service');
const router = express.Router();

router.get('/', serviceController.getProducts);
router.get('/:id', serviceController.getProduct);
router.post('/', serviceController.addProduct);
router.put('/:id', serviceController.changeProduct);
router.delete('/:id', serviceController.deleteProduct);

module.exports = router;