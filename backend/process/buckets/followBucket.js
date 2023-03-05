const { conBucketsPorQuery } = require("../../controllers/buckets.controllers");
const { conTraerUno } = require("../../controllers/user.controller");
const { conModificarBucket } = require("../../controllers/buckets.controllers");
const { conModificarTypeTock } = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const followBucket = async ({ nombre, usuario }) => {
  if (typeof usuario.aportes == "string")
    throw new Error(`el atributo tokens debe ser un numero entero`);
  else if (usuario.aportes < 10)
    throw new Error(`el monto minimo debe ser de 10 tokens`);

  const id = new objectId(usuario._id);
  const query1 = { _id: id };
  const user = await conTraerUno(query1);
  if (!user) throw new Error(`no se encontro al user: ${id}`);

  const aux = (user.tokens ? user.tokens : 0) - usuario.aportes;
  if (aux < 0) {
    throw new Error(
      `no tiene saldo para realizar esta operacion, la cuenta dispone de solo ${user.tokens} tokens`
    );
  }

  const query2 = { nombre: nombre };
  const bucket = await conBucketsPorQuery(query2);

  if (!bucket.length) throw new Error(`el bucket ${nombre} no existe`);

  const result = bucket[0].usuarios.find((us) => us._id === usuario._id);
  if (result)
    throw new Error(
      `el usuario: ${usuario._id} ya esta suscrito a este bucket`
    );

  const query3 = {
    $set: {
      tokensActuales: bucket[0].tokensActuales + usuario.aportes,
      usuarios: [
        ...bucket[0].usuarios,
        { _id: usuario._id, aportes: usuario.aportes },
      ],
    },
  };

  const resp = await conModificarBucket(query2, query3);
  if (!resp.modifiedCount)
    throw new Error(`error al completar el proceso en el bucket ${nombre}`);

  const query4 = {
    $set: {
      tokens: aux,
      buckets: [
        ...user.buckets,
        { bucketName: bucket[0].nombre, aportes: usuario.aportes },
      ],
    },
  };
  const resp2 = await conModificarTypeTock(query1, query4);
  if (!resp2.modifiedCount)
    throw new Error(`error al completar el proceso en el bucket ${nombre}`);

  return `se realizo con exito la operacion del bucket: ${bucket[0]._id} con el usuario ${usuario._id} por la cantidad de ${usuario.aportes} tokens`;
};

module.exports = { followBucket };
