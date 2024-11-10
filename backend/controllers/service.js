// const path = require('path')
const ProductModel = require('../models/product');

class serviceController {
    static async getProduct(req, res) {
        const products = await ProductModel.findAll();
        res.send(products);
    }
}

module.exports = serviceController;