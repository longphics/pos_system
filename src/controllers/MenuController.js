const Customer = require('../models/Customer.js')
const Menu = require('../models/Menu.js')
const createMenu = require('./Func.js').createMenu

class MenuController {
    // [GET] /menu
    index(req, res) {
        Menu.find({}, (err, docs) => {
            if (docs.length == 0) {
                createMenu()
            } else {
                docs = docs.map(doc => doc.toObject())
                res.render('menu', { docs })
            }
        })
    }

    // [GET] /menu/cart
    cart(req, res) {
        Menu.find({}, (err, docs) => {
            if (docs.length == 0) {
                createMenu()
            } else {
                docs = docs.map(doc => doc.toObject())
                res.render('menu/cart', { docs })
            }
        })
    }

    // [GET] /menu/cart/send
    send(req, res) {
        console.log(req.body)
        res.send("Bạn đã đặt món thành công!")
    }
}

module.exports = new MenuController()
