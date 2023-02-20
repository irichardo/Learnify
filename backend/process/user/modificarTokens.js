const { conModificarTokens } = require("../../controllers/user.controller");

const modificarTokens = async (user, tokens) => {
  return conModificarTokens();
};

module.exports = { modificarTokens };
