const { traerTodos } = require("../../controllers/buckets.controllers");

const traerTodosLosBuckets = () => traerTodos();

module.exports = { traerTodosLosBuckets };
