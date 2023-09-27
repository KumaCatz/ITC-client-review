const express = require('express')
const { postReview } = require('../controllers/review.controller')
const router = express.Router()

router.post('/review', postReview)

module.exports = router