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

const conTraerUno = async (id) => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  try {
    const modelo = (await modeloGenerator.next()).value;
    return await modelo.findById(id);
  } catch (error) {
    return error;
  } finally {
    await modeloGenerator.return?.();
  }
};

const conModificarTypeTock = async (query1, query2) => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  try {
    const modelo = (await modeloGenerator.next()).value;
    return await modelo.updateOne(query1, query2);
  } catch (error) {
    return error;
  } finally {
    await modeloGenerator.return?.();
  }
};

const conFiltrarPorQuery = async (query) => {
  const modeloGenerator = obtenerModelo("db-name", "users");
  try {
    const modelo = (await modeloGenerator.next()).value;
    return await modelo.find(query).toArray();
  } catch (error) {
    return error;
  } finally {
    await modeloGenerator.return?.();
  }
};

module.exports = {
  conTraerTodos,
  conTraerUno,
  conModificarTypeTock,
  conFiltrarPorQuery,
};
