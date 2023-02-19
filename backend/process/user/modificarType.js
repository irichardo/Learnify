const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;

const modificarType = async (user, type) => {
  return `me pasaste este type: ${type}`;
};

// const { conTraerUno } = require("../../controllers/user.controller");

// const traerUno = async (user) => {
//
//   try {

//     const query = { user: user };

//     const usuario = await conTraerUno(modelo, query);

//     return usuario ? usuario : `no se encontro al user: ${user}`;
//   } catch (error) {
//     return error;
//   } finally {
//     await client.close();
//   }
// };

module.exports = { modificarType };
