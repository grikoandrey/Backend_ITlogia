const path = require('path')

class aboutController {
    static getIndex(req, res) {
        res.sendFile(path.resolve(`${__dirname}/../views/about.html`));
    }
}

module.exports = aboutController;