const { obtenerModelo } = require("../process/obtenerModelo");
const modeloGenerator = obtenerModelo("db-name", "users");

const conTraerTodos = async () => {
  const modelo = (await modeloGenerator.next()).value;
  try {
    return await modelo.find().toArray();
  } catch (error) {
    return error;
  } finally {
    await modeloGenerator.return?.();
  }
};

const conTraerUno = async (modelo, query) => {
  try {
    return await modelo.findOne(query);
  } catch (error) {
    return error;
  }
};

const conModificarTokens = async (modelo, query) => {
  return "holi";
};

module.exports = { conTraerTodos, conTraerUno, conModificarTokens };
