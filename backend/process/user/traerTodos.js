const { conTraerTodos } = require("../../controllers/user.controller");

const traerTodos = async () => {
  try {
    const respuesta = await conTraerTodos();
    return respuesta.length ? respuesta : "no se encontraron los datos";
  } catch (error) {
    return error;
  }
};

module.exports = { traerTodos };
