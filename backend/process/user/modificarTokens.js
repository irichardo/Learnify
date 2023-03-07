const { conModificarTypeTock } = require("../../controllers/user.controller");
const { conTraerUno } = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const modificarTokens = async (email, tokens) => {
  if (typeof tokens == "string") {
    throw new Error(`el atributo tokens debe ser un numero entero`);
  }

  const userTokens = (await conTraerUno({ email }))?.tokens;

  if (userTokens == undefined) {
    throw new Error(`no se encontro el usuario ${id}`);
  }

  const aux = tokens + (userTokens ? userTokens : 0);

  const query2 = { $set: { tokens: aux } };

  if (aux < 0)
    throw new Error(
      `no tiene saldo para realizar esta operacion, la cuenta dispone de solo ${userTokens} tokens`
    );

  const resp = await conModificarTypeTock({ email }, query2);

  if (resp.modifiedCount)
    return `el saldo anterior del usuario: ${email} era de ${
      userTokens ? userTokens : 0
    } tokens, el saldo actual es de ${aux} tokens`;
};

module.exports = { modificarTokens };
