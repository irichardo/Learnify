const conTraerTodos = async (modelo) => {
  try {
    return await modelo.find();
  } catch (error) {
    return error;
  }
};

const conTraerUno = async (modelo, query) => {
  try {
    const usuario = await modelo.findOne(query);
    return usuario;
  } catch (error) {
    return error;
  }
};

module.exports = { conTraerTodos, conTraerUno };
