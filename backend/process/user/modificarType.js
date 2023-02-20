const { conModificarType } = require("../../controllers/user.controller");

const modificarType = async (user, type) => {
  const query1 = { user: user };
  const query2 = { $set: { type } };
  const resp = await conModificarType(query1, query2);
  if (!resp.matchedCount) throw new Error(`no se encontro el usuario ${user}`);

  return !resp.modifiedCount
    ? `la cueta del usuario: ${user} ya es del tipo: ${type}`
    : `se modifico con exito la cuenta del usuario: ${user} a tipo: ${type}`;
};

module.exports = { modificarType };
