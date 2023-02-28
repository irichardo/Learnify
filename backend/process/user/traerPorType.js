const { conFiltrarPorQuery } = require("../../controllers/user.controller");

const traerPorType = async (type) => {
  const arr = ["super admin", "admin", "teacher", "student"];
  if (!arr.includes(type)) {
    throw new Error(
      `el tipo proporcionado no coincide con ninguna de las categorias`
    );
  }

  const query = { type: type };
  const usuarios = await conFiltrarPorQuery(query);
  if (usuarios.length) return usuarios;
  throw new Error(`no se encontraron usuarios con type: ${type}`);
};

module.exports = { traerPorType };
