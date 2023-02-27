const { Router } = require('express')
const router = Router()

let globalId = {}

router.post('/', async(req, res) => {
  const { id } = req.body
//   console.log(id.data)
  console.log('aaaaaaaaaaa')
  globalId = id
  res.send('Ok')
})

router.get('/',async(req,res)=>{
console.log(globalId ,'aaaaaaa');
res.json(globalId);
})


// NO ME PREGUNTAS COMO HICE ESTO YA IBA POR EL 3ERMONSTER
module.exports = router
