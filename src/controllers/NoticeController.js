const Customer = require('../models/Customer.js')
const Menu = require('../models/Menu.js')

class NoticeController {
    // [GET] /notice
    index(req, res) {
        res.render('notice')
    }
}

module.exports = new NoticeController()