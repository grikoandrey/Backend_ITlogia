// const path = require('path')

class contactController {
    static getIndex(req, res) {
        res.render('contact', {
            title: 'contact'
        });
    }
}

module.exports = contactController;