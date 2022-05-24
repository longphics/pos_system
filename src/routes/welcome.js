const express = require('express')
const router = express.Router()
const welcomeController = require('../controllers/WelcomeController')

router.get('/', welcomeController.index)

router.post('/create', welcomeController.create)

module.exports = router