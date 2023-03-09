const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const server = express()

// variables de entorno
const { PORT, MONGO_URL } = process.env

// configuracion de middleware
server.set('views', './templates')
server.set('view engine', 'ejs')
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(express.json())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
server.use(cors({ origin: ['https://learnify-86vs-git-development-irichardo.vercel.app'] }))

// introducciendo las routes
server.use('/', routes)

// StricMode
mongoose.set('strictQuery', false)
// coneccion con mongoDB
mongoose
  .connect(MONGO_URL)
  .then((res) => console.log('conectado a mongoDB atlas'))
  .catch((err) => console.log(err))

server.listen(PORT, () => {
  console.log('servidor escuchando en el puerto' + PORT)
})
