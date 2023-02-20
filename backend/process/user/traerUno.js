const { conTraerUno } = require("../../controllers/user.controller");

const traerUno = async (user) => {
  const query = { user: user };
  const usuario = await conTraerUno(query);
  if (usuario) return usuario;
  throw new Error(`no se encontro al user: ${user}`);
};

module.exports = { traerUno };
