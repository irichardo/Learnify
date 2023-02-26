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

module.exports = { conAgregarBucket };
