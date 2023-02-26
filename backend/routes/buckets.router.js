const { Router } = require("express");
const router = Router();
const { agregarBucket } = require("../process/buckets/agregarBucket");
const {
  traerTodosLosBuckets,
} = require("../process/buckets/traerTodosLosBuckets");
const {
  traerBucketsActivos,
} = require("../process/buckets/traerBucketsActivos");

router.post("/", async (req, res) => {
  try {
    const respuesta = await agregarBucket(req.body);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

router.get("/", async (req, res) => {
  let respuesta;
  try {
    if (req.body.type) respuesta = await traerBucketsActivos(req.body.type);
    else respuesta = await traerTodosLosBuckets();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

module.exports = router;
