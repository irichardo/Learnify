const usuariosSchema = require("../models/usuarios");

const conCrearUsuario = async (user) => {
  try {
    const resp = usuariosSchema(user);
    await resp.save();
    return resp;
  } catch (error) {
    return error;
  }
};

module.exports = { conCrearUsuario };
