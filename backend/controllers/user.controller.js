const { obtenerModelo } = require("../process/obtenerModelo");

const conTraerTodos = async () => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  try {
    const modelo = (await modeloGenerator.next()).value;
    return await modelo.find().toArray();
  } catch (error) {
    return error;
  } finally {
    await modeloGenerator.return?.();
  }
};

const conTraerUno = async (query) => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  try {
    const modelo = (await modeloGenerator.next()).value;
    return await modelo.findOne(query);
  } catch (error) {
    return error;
  } finally {
    await modeloGenerator.return?.();
  }
};

const conModificarTokens = async (modelo, query) => {
  return "holi";
};

module.exports = { conTraerTodos, conTraerUno, conModificarTokens };
