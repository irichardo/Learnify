const { conTraerTodos } = require("../../controllers/user.controller");

const traerTodos = async () => {
  const respuesta = await conTraerTodos();
  return respuesta;
};

module.exports = { traerTodos };
