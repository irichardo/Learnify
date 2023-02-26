const { conTraerUno } = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const traerUno = async (id) => {
  const otroId = new objectId(id);
  const query = { _id: otroId };
  const usuario = await conTraerUno(query);
  if (usuario) return usuario;
  throw new Error(`no se encontro al user: ${id}`);
};

module.exports = { traerUno };
