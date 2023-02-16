const { conCrearUsuario } = require("../../controllers/user.controller");

const crearUsuario = (info) => {
  const resp = conCrearUsuario(info);
  return resp;
};

module.exports = { crearUsuario };
