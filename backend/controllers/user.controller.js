const conTraerTodos = async (modelo) => {
  try {
    return await modelo.find();
  } catch (error) {
    return error;
  }
};

module.exports = { conTraerTodos };
