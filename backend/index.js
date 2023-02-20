const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const server = express()
const routes = require('./routes/index.js')

// variables de entorno
const { PORT, MONGO_URL } = process.env

// middleware
server.use(express.json())
server.use('/', routes)

// StricMode
mongoose.set('strictQuery', false)

mongoose.set("strictQuery", false);
// coneccion con mongoDB
mongoose
  .connect(MONGO_URL)
  .then((res) => console.log('conectado a mongoDB atlas'))
  .catch((err) => console.log(err))

server.listen(PORT, () => {
  console.log('servidor escuchando en el puerto ' + PORT)
})
