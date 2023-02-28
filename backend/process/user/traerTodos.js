const { conTraerTodos } = require('../../controllers/user.controller')

const traerTodos = async () => {
  const respuesta = await conTraerTodos()
  if (respuesta.length) return respuesta
  throw new Error('no se encontraron los usuarios')
}

module.exports = { traerTodos }
