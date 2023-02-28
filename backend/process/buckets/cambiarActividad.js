const {
  conBucketsPorQuery,
  conModificarBucket,
} = require("../../controllers/buckets.controllers");
const objectId = require("mongodb").ObjectId;

const cambiarActividad = async (id, active) => {
  if (active !== "change") throw new Error(`comando -${active}- invalido`);

  const nuevoId = new objectId(id);
  const query1 = { _id: nuevoId };
  const bucket = await conBucketsPorQuery(query1);
  if (!bucket) throw new Error(`no se encontro al bucket: ${id}`);

  const query2 = { $set: { activo: !bucket[0].activo } };
  const resp = await conModificarBucket(query1, query2);
  if (!resp.modifiedCount) throw new Error(`error al finalizar la operacion`);
  return `se cambio con exito el estado del bucket ${id} a ${!bucket[0]
    .activo}`;
};

module.exports = { cambiarActividad };
