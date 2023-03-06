const {
  conTraerUno,
  conFiltrarPorQuery,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const traerUno = async (id, email) => {
  try {
    if (id) {
      const otroId = new objectId(id);
      const query = { _id: otroId };
      const usuario = await conTraerUno(query);
      if (usuario) return usuario;
      throw new Error(`no se encontro al user: ${id}`);
    } else {
      const query = { email: email };
      const usuario = await conFiltrarPorQuery(query);
      if (usuario.length) return usuario[0];
      throw new Error(`no existe el usuario con el email: ${email}`);
    }
  } catch (error) {
    return error;
  }
};

module.exports = { traerUno };
