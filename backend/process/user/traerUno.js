const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;
const { conTraerUno } = require("../../controllers/user.controller");

const traerUno = async (user) => {
  const client = new MongoClient(MONGO_URL);
  try {
    await client.connect();
    const modelo = await client.db("db-name").collection("users");
    const query = { user: user };

    const usuario = await conTraerUno(modelo, query);

    return usuario ? usuario : `no se encontro al user: ${user}`;
  } catch (error) {
    return error;
  } finally {
    await client.close();
  }
};

module.exports = { traerUno };
