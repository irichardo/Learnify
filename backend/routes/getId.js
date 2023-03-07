const { Router } = require('express')
const router = Router()

let globalId = {}

router.post('/', async (req, res) => {
  const { id } = req.body
  globalId = id
  res.send('Ok')
})

router.get('/', async (req, res) => {
  res.json(globalId)
})

// NO ME PREGUNTAS COMO HICE ESTO YA IBA POR EL 3ERMONSTER
module.exports = router
