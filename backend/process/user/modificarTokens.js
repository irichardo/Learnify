const {
  conModificarTypeTock,
  conTraerUno,
} = require("../../controllers/user.controller");

const modificarTokens = async (email, tokens) => {
  if (typeof tokens == "string") {
    throw new Error(`el atributo tokens debe ser un numero entero`);
  }

  const userTokens = (await conTraerUno({ email }))?.tokens;

  if (userTokens == undefined) {
    throw new Error(`no se encontro el usuario ${email}`);
  }

  const aux = tokens + (userTokens ? userTokens : 0);
  if (aux < 0)
    throw new Error(
      `no tiene saldo para realizar esta operacion, la cuenta dispone de solo ${userTokens} tokens`
    );

  const resp = await conModificarTypeTock({ email }, { $set: { tokens: aux } });

  if (resp.modifiedCount)
    return `el saldo anterior del usuario: ${email} era de ${
      userTokens ? userTokens : 0
    } tokens, el saldo actual es de ${aux} tokens`;
};

module.exports = { modificarTokens };
