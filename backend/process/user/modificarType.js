const { conModificarTypeTock } = require('../../controllers/user.controller')

const modificarType = async (user, type) => {
  const arr = ['super admin', 'admin', 'teacher', 'student']
  if (!arr.includes(type)) {
    throw new Error(
      'el tipo proporcionado no coincide con ninguna de las categorias'
    )
  }

  const query1 = { user: user }
  const query2 = { $set: { type } }
  const resp = await conModificarTypeTock(query1, query2)
  if (!resp.matchedCount) throw new Error(`no se encontro el usuario ${user}`)

  return !resp.modifiedCount
    ? `la cueta del usuario: ${user} ya es del tipo: ${type}`
    : `se modifico con exito la cuenta del usuario: ${user} a tipo: ${type}`
}

module.exports = { modificarType }
