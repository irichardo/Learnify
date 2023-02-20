const { obtenerModelo } = require("../obtenerModelo");
const { conModificarTokens } = require("../../controllers/user.controller");

const modificarTokens = async (user, tokens) => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  const modelo = (await modeloGenerator.next()).value;

  try {
    const resp = conModificarTokens();
    return resp;
  } catch (error) {
    return error;
  } finally {
    modeloGenerator.return?.();
  }
};

module.exports = { modificarTokens };
