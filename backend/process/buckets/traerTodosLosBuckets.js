const { traerTodos } = require("../../controllers/buckets.controllers");

const traerTodosLosBuckets = async () => {
  const resp = await traerTodos();
  if (!resp.length) throw new Error(`no hay buckets disponibles`);
  return resp;
};

module.exports = { traerTodosLosBuckets };
