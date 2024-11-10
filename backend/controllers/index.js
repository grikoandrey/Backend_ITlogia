// const path = require('path')

class indexController {
    static getIndex(req, res) {
        res.render('index', {
            title: 'main'
        });
    }
}

module.exports = indexController;