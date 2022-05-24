const express = require('express')
const router = express.Router()
const menuController = require('../controllers/MenuController')

router.get('/', menuController.index)

router.get('/cart', menuController.cart)

module.exports = router;