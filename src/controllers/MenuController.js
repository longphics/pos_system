const Customer = require('../models/Customer.js')
const Menu = require('../models/Menu.js')

class MenuController {
    // [GET] /menu
    index(req, res) {
        Menu.find({}, (err, docs) => {
            docs = docs.map(doc => doc.toObject())
            res.render('menu', { docs })
        })
    }

    // [GET] /menu/cart
    cart(req, res) {
        res.render('menu/cart')
    }
}

module.exports = new MenuController()
