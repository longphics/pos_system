const Customer = require('../models/Customer.js')
const Menu = require('../models/Menu.js')
const func = require('./func.js')

class MenuController {
    // [GET] /menu
    index(req, res) {
        Menu.find({}, (err, docs) => {
            if (docs.length == 0) {
                func.createMenu()
            } else {
                docs = docs.map(doc => doc.toObject())
                res.render('menu', { docs })
            }
        })
    }

    // [GET] /menu/cart
    cart(req, res) {
        res.render('menu/cart')
    }
}

module.exports = new MenuController()
