const { Router } = require('express')
const router = Router()
const users = require('./user.route')
const specialty = require('./specialty.route')
const buckets = require('./buckets.router')
const createPayment = require('./paymentCreate')
const paymentExecute = require('./paymentExecute')
const endPayment = require('./endPayment')
const getId = require('./getId')

router.use('/users', users)
router.use('/specialty', specialty)
router.use('/buckets', buckets)
router.use('/create-payment', createPayment)
router.use('/execute-payment', paymentExecute)// ACA SE ENVIA LA SOLICITUD;
router.use('/endPayment', endPayment)
router.use('/getId', getId)

module.exports = router
