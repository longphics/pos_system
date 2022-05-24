const Customer = require("../models/Customer.js")
const Menu = require("../models/Menu.js")

class WelcomeController {
    // [GET] /
    index(req, res) {
        res.render("welcome")
    }

    // [POST] /create
    create(req, res) {
        Customer.create({ name: req.body.name }, (err, doc) => {
            if (err) {
                console.log(err)
            }
            res.send(doc._id.toString())
        })
    }
}

module.exports = new WelcomeController()
