const path = require('path')

class contactController {
    static getIndex(req, res) {
        res.sendFile(path.resolve(`${__dirname}/../views/contact.html`));
    }
}

module.exports = contactController;