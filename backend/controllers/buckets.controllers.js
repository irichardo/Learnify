const bucketSchema = require("../models/buckets");

const conAgregarBucket = async (bucket) => {
  try {
    const resp = bucketSchema(bucket);
    await resp.save();
    return resp;
  } catch (error) {
    return error;
  }
};

const traerTodos = async () => {
  try {
    return await bucketSchema.find();
  } catch (error) {
    return error;
  }
};

const conBucketsPorQuery = async (query) => {
  try {
    return await bucketSchema.find(query);
  } catch (error) {
    return error;
  }
};

const conModificarBucket = async (query1, query2) => {
  try {
    return await bucketSchema.updateOne(query1, query2);
  } catch (error) {
    return error;
  }
};

const conDeleteBucket = async (query) => {
  try {
    return await bucketSchema.remove(query);
  } catch (error) {
    return error;
  }
};

module.exports = {
  conAgregarBucket,
  traerTodos,
  conBucketsPorQuery,
  conAgregarBucket,
  conModificarBucket,
  conDeleteBucket,
};
