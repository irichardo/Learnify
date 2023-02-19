const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;

async function* obtenerModelo(dbName, schemaName) {
  const client = new MongoClient(MONGO_URL);
  try {
    await client.connect();
    const modelo = client.db(dbName).collection(schemaName);
    yield modelo;
  } catch (error) {
    return error;
  } finally {
    await client.close();
    console.log("cerramos el cliente");
  }
}

module.exports = { obtenerModelo };
