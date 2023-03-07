const { Router } = require('express')
const router = Router()
const { createPayment } = require('../controllers/paymentMethod')

router.post('/', createPayment)

module.exports = router
