const {
  conBucketsPorQuery,
  conDeleteBucket,
} = require("../../controllers/buckets.controllers");
const {
  conFiltrarPorQuery,
  conModificarTypeTock,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const deleteBucket = async (nombre) => {
  const bucket = await conBucketsPorQuery({ nombre });
  if (!bucket.length) throw new Error(`el bucket: -${nombre}- no existe`);

  const usuarios = bucket[0].usuarios;
  const usuariosIds = usuarios.map((user) => new objectId(user._id));
  const query1 = { _id: { $in: usuariosIds } };
  const usuariosModificados = await conFiltrarPorQuery(query1);

  usuariosModificados.forEach(async (usuario, i) => {
    const user = usuarios[i];

    const arrModificado = usuario.buckets.filter(
      (buck) => buck.bucketName !== nombre
    );

    const query2 = {
      $set: {
        tokens: usuario.tokens + user.aportes,
        buckets: arrModificado,
      },
    };

    const resp2 = await conModificarTypeTock({ _id: usuario._id }, query2);
    if (!resp2.modifiedCount)
      throw new Error(
        `error al completar el proceso en el bucket ${nombre} con el usuario ${usuario._id}`
      );
  });

  const resp = await conDeleteBucket({ nombre });

  if (!resp.deletedCount)
    throw new Error(`error al completar el proceso en el bucket ${nombre}`);

  return `se elimino el bucket: ${nombre} con id: ${bucket[0]._id}`;
};

module.exports = { deleteBucket };
