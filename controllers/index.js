const path = require('path')

class indexController {
    static getIndex(req, res) {
        res.sendFile(path.resolve(`${__dirname}/../views/index.html`));
    }
}

module.exports = indexController;