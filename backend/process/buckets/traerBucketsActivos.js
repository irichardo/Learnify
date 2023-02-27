const { conBucketsPorQuery } = require("../../controllers/buckets.controllers");

const traerBucketsActivos = (type) => {
  if (typeof type !== "string") throw new Error(`el tipo debe ser un string`);

  if (type !== "activo" && type !== "inactivo")
    throw new Error(`el type debe ser activo o inactivo`);

  const query = type === "activo" ? { activo: true } : { activo: false };
  return conBucketsPorQuery(query);
};

module.exports = { traerBucketsActivos };
