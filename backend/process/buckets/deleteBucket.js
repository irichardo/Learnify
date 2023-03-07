const {
  conBucketsPorQuery,
  conDeleteBucket,
} = require("../../controllers/buckets.controllers");
const {
  conTraerUno,
  conModificarTypeTock,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const deleteBucket = async (nombre) => {
  const bucket = await conBucketsPorQuery({ nombre });
  if (!bucket.length) throw new Error(`el bucket ${nombre} no existe`);

  while (bucket[0].usuarios.length) {
    const user = bucket[0].usuarios[0];
    const id = new objectId(user._id);
    const query1 = { _id: id };
    const usuario = await conTraerUno(query1);

    if (usuario) {
      const arrModificado = usuario.buckets.filter(
        (buck) => buck.bucketName !== nombre
      );

      const query2 = {
        $set: {
          tokens: usuario.tokens + user.aportes,
          buckets: arrModificado,
        },
      };

      const resp2 = await conModificarTypeTock(query1, query2);
      if (!resp2.modifiedCount)
        throw new Error(
          `error al completar el proceso en el bucket ${nombre} con el usuario ${usuario._id}`
        );
    }
    bucket[0].usuarios.shift();
  }

  const resp = await conDeleteBucket({ nombre });

  if (!resp.deletedCount)
    throw new Error(`error al completar el proceso en el bucket ${nombre}`);

  return `se elimino el bucket: ${nombre} con id: ${bucket[0]._id}`;
};

module.exports = { deleteBucket };
