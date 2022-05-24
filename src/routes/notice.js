const express = require('express')
const router = express.Router()
const noticeController = require('../controllers/NoticeController')

router.get('/', noticeController.index)

module.exports = router