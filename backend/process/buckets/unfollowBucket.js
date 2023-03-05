const {
  conBucketsPorQuery,
  conModificarBucket,
} = require("../../controllers/buckets.controllers");
const {
  conTraerUno,
  conModificarTypeTock,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const unfollowBucket = async ({ nombre, usuario }) => {
  if (typeof usuario.aportes == "string")
    throw new Error(`el atributo tokens debe ser un numero entero`);
  else if (usuario.aportes < 10)
    throw new Error(`el monto minimo debe ser de 10 tokens`);

  const id = new objectId(usuario._id);
  const query1 = { _id: id };
  const user = await conTraerUno(query1);
  if (!user) throw new Error(`no se encontro al user: ${id}`);

  const query2 = { nombre: nombre };
  const bucket = await conBucketsPorQuery(query2);

  if (!bucket.length) throw new Error(`el bucket ${nombre} no existe`);

  const result = bucket[0].usuarios.find((us) => us._id === usuario._id);
  if (!result)
    throw new Error(
      `el usuario: ${usuario._id} no esta suscripto a este bucket`
    );

  //////////////////////////modificacion del buicket///////////////////////////////////////////////////
  const arrModificado = bucket[0].usuarios.filter(
    (use) => use._id !== usuario._id
  );
  let totalDeAportes = 0;
  for (const objUser of bucket[0].usuarios) {
    if (objUser._id === usuario._id)
      totalDeAportes = objUser.aportes + totalDeAportes;
  }
  let aux10;
  if (bucket[0].tokensActuales - totalDeAportes) {
    aux10 = {
      tokensActuales: bucket[0].tokensActuales - totalDeAportes,
      usuarios: arrModificado,
    };
  } else {
    aux10 = {
      tokensActuales: bucket[0].tokensActuales - totalDeAportes,
      usuarios: arrModificado,
      activo: false,
    };
  }
  const query3 = {
    $set: aux10,
  };

  const resp = await conModificarBucket(query2, query3);
  if (!resp.modifiedCount)
    throw new Error(`error al completar el proceso en el bucket ${nombre}`);

  ////////////////////////////modificacion del usuario//////////////////////////////////////////////////////////

  const arrModificado2 = user.buckets.filter(
    (buck) => buck.bucketName !== nombre
  );

  const query4 = {
    $set: {
      tokens: user.tokens + totalDeAportes,
      buckets: arrModificado2,
    },
  };

  const resp2 = await conModificarTypeTock(query1, query4);
  if (!resp2.modifiedCount)
    throw new Error(`error al completar el proceso en el bucket ${nombre}`);

  return `el usuario: ${
    usuario._id
  } dejo de seguir al bucket: ${nombre} y ahora cuenta con ${
    user.tokens + totalDeAportes
  } tokens en su cuenta`;
};

module.exports = { unfollowBucket };
