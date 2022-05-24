const express = require('express')
const router = express.Router()
const historyController = require('../controllers/HistoryController')

router.get('/', historyController.index)

router.get('/detail', historyController.detail)

module.exports = router;