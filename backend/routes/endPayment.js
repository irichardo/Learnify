const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  const message = req.body.message
  res.render('template', { message })
})

module.exports = router
