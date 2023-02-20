const { conTraerUno } = require("../../controllers/user.controller");

const traerUno = async (user) => {
  const query = { user: user };

  try {
    const usuario = await conTraerUno(query);
    return usuario ? usuario : `no se encontro al user: ${user}`;
  } catch (error) {
    return error;
  }
};

module.exports = { traerUno };
