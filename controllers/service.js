const path = require('path')
const ProductModel = require('../models/product');

class serviceController {
    static async getIndex(req, res) {
        const products = await ProductModel.findAll({

        })
        res.sendFile(path.resolve(`${__dirname}/../views/service.html`));
    }
}

module.exports = serviceController;