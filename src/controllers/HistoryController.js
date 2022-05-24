const Customer = require('../models/Customer.js')
const Menu = require('../models/Menu.js')

class HistoryController {
    // [GET] /history
    index(req, res) {
        res.render('history')
    }

    // [GET] /history/detail
    detail(req, res) {
        res.render('history/detail')
    }
}

module.exports = new HistoryController()