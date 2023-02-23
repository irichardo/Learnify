const { conModificarTypeTock } = require("../../controllers/user.controller");

const modificarType = async (id, type) => {
  const arr = ["super admin", "admin", "teacher", "student"];
  if (!arr.includes(type)) {
    throw new Error(
      `el tipo proporcionado no coincide con ninguna de las categorias`
    );
  }

  const query1 = { _id: id };
  const query2 = { $set: { type } };
  console.log(query1, query2);
  const resp = await conModificarTypeTock(query1, query2);
  if (!resp.matchedCount) throw new Error(`no se encontro el usuario ${id}`);

  return !resp.modifiedCount
    ? `la cueta del usuario: ${id} ya es del tipo: ${type}`
    : `se modifico con exito la cuenta del usuario: ${id} a tipo: ${type}`;
};

module.exports = { modificarType };
