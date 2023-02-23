const { conModificarTypeTock } = require("../../controllers/user.controller");
const { conTraerUno } = require("../../controllers/user.controller");

const modificarTokens = async (id, tokens) => {
  const query1 = { _id: id };

  if (typeof tokens == "string") {
    throw new Error(`el atributo tokens debe ser un numero entero`);
  }

  const userTokens = (await conTraerUno(query1))?.tokens;

  if (userTokens == undefined) {
    throw new Error(`no se encontro el usuario ${user}`);
  }

  const aux = tokens + (userTokens ? userTokens : 0);

  const query2 = { $set: { tokens: aux } };

  if (aux < 0)
    throw new Error(
      `no tiene saldo para realizar esta operacion, la cuenta dispone de solo ${userTokens} tokens`
    );

  const resp = await conModificarTypeTock(query1, query2);

  if (resp.modifiedCount)
    return `el saldo anterior del usuario: ${user} era de ${
      userTokens ? userTokens : 0
    } tokens, el saldo actual es de ${aux} tokens`;
};

module.exports = { modificarTokens };
