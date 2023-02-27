const {
  conModificarTypeTock,
  conTraerUno,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const modificarActividad = async (id, active) => {
  if (active !== "change") throw new Error(`comando -${active}- invalido`);

  const nuevoId = new objectId(id);
  const query1 = { _id: nuevoId };
  const usuario = await conTraerUno(query1);
  if (!usuario) throw new Error(`no se encontro al user: ${id}`);

  const query2 = { $set: { active: !usuario.active } };
  const resp = await conModificarTypeTock(query1, query2);
  if (!resp.modifiedCount) throw new Error(`error al finalizar la operacion`);
  return `se cambio con exito el estado del usuario ${id} a ${!usuario.active}`;
};

module.exports = { modificarActividad };
