const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;
const { conTraerTodos } = require("../../controllers/user.controller");

const traerTodos = async () => {
  const respuesta = [];
  const client = new MongoClient(MONGO_URL);

  try {
    await client.connect();

    const modelo = await client.db("db-name").collection("users");
    const datos = await conTraerTodos(modelo);
    await datos.forEach((dato) => respuesta.push(dato));

    return respuesta.length ? respuesta : "no se encontraron los datos";
  } catch (error) {
    return error;
  } finally {
    await client.close();
  }
};

module.exports = { traerTodos };
