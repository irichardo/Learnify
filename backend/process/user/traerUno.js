const { conTraerUno } = require("../../controllers/user.controller");

const traerUno = async (id) => {
  const query = { _id: id };
  const usuario = await conTraerUno(query);
  if (usuario) return usuario;
  throw new Error(`no se encontro al user: ${user}`);
};

module.exports = { traerUno };
