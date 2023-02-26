const { Router } = require("express");
const router = Router();
const { agregarBucket } = require("../process/buckets/agregarBucket");
const {
  traerTodosLosBuckets,
} = require("../process/buckets/traerTodosLosBuckets");

router.post("/", async (req, res) => {
  try {
    const respuesta = await agregarBucket(req.body);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

router.get("/", async (req, res) => {
  try {
    const respuesta = await traerTodosLosBuckets();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

module.exports = router;
