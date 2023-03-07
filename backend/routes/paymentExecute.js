const { Router } = require('express')
const router = Router()
const { executePayment } = require('../controllers/paymentMethod')

router.get('/', executePayment)

module.exports = router
