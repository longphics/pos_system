const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/PaymentController')

router.get('/', paymentController.index)

module.exports = router