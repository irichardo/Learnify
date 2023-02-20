const { obtenerModelo } = require("../obtenerModelo");
const { conTraerUno } = require("../../controllers/user.controller");

const traerUno = async (user) => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  const modelo = (await modeloGenerator.next()).value;

  const query = { user: user };

  try {
    const usuario = await conTraerUno(modelo, query);
    return usuario ? usuario : `no se encontro al user: ${user}`;
  } catch (error) {
    return error;
  } finally {
    modeloGenerator.return?.();
  }
};

module.exports = { traerUno };
