const Customer = require('../models/Customer.js')
const Menu = require('../models/Menu.js')

class PaymentController {
    // [GET] /payment
    index(req, res) {
        res.render('payment')
    }
}

module.exports = new PaymentController()