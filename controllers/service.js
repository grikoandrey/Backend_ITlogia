// const path = require('path')
const ProductModel = require('../models/product');

class serviceController {
    static async getIndex(req, res) {
        const products = await ProductModel.findAll({

        })
        res.render('service', {
            title: 'service',
            products: products,
        });
    }
}

module.exports = serviceController;