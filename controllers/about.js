// const path = require('path')

class aboutController {
    static getIndex(req, res) {
        res.render('about', {
            title: 'about'
        });
    }
}

module.exports = aboutController;