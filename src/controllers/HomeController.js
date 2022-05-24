const Customer = require("../models/Customer.js")
const Menu = require("../models/Menu.js")

class HomeController {
    // [GET] /home
    index(req, res) {
        const id = req.query.id

        Customer.findById(id, (err, doc) => {
            res.render("home", doc)
        })
    }
}

module.exports = new HomeController()
