const { conAgregarBucket } = require("../../controllers/buckets.controllers");
const {
  conTraerUno,
  conModificarTypeTock,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const agregarBucket = async ({ nombre, usuario }) => {
  if (typeof usuario.aportes == "string") {
    throw new Error(`el atributo tokens debe ser un numero entero`);
  } else if (usuario.aportes < 10) {
    throw new Error(`el monto minimo debe ser de 10 tokens`);
  }

  const id = new objectId(usuario._id);
  const query = { _id: id };
  const user = await conTraerUno(query);
  if (!user) throw new Error(`Error: No se encontro al user: ${_id}`);
  if (!user.active)
    throw new Error(
      `Error: La cuenta del usuario: ${user.name} esta desabilitada`
    );

  const userTokens = user.tokens;
  const aux = (userTokens ? userTokens : 0) - usuario.aportes;
  if (aux < 0) {
    throw new Error(
      `no tiene saldo para realizar esta operacion, la cuenta dispone de solo ${userTokens} tokens`
    );
  }

  const bucket = {
    nombre: nombre.trim(),
    tokensActuales: usuario.aportes,
    activo: true,
    usuarios: [{ _id: id, aportes: usuario.aportes }],
  };
  const nuevoB = await conAgregarBucket(bucket);
  if (!nuevoB._id) throw new Error(`el nombre del bucket: ${nombre} ya existe`);

  const query2 = {
    $set: {
      tokens: aux,
      buckets: [
        ...user.buckets,
        { bucketName: nuevoB.nombre, aportes: usuario.aportes },
      ],
    },
  };

  const resp = await conModificarTypeTock(query, query2);
  if (resp.modifiedCount) return `se creo con exito el bucket: ${nombre}`;
};

module.exports = { agregarBucket };
