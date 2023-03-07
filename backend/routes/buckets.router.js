const { Router } = require("express");
const router = Router();
const { agregarBucket } = require("../process/buckets/agregarBucket");
const {
  traerTodosLosBuckets,
} = require("../process/buckets/traerTodosLosBuckets");
const {
  traerBucketsActivos,
} = require("../process/buckets/traerBucketsActivos");
const { cambiarActividad } = require("../process/buckets/cambiarActividad");
const { followBucket } = require("../process/buckets/followBucket");
const { unfollowBucket } = require("../process/buckets/unfollowBucket");
const { deleteBucket } = require("../process/buckets/deleteBucket");

router.post("/", async (req, res) => {
  try {
    const respuesta = await agregarBucket(req.body);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message ? error.message : error });
  }
});

router.get("/", async (req, res) => {
  let respuesta;
  try {
    if (req.query.type) respuesta = await traerBucketsActivos(req.query.type);
    else respuesta = await traerTodosLosBuckets();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message ? error.message : error });
  }
});

router.put("/", async (req, res) => {
  const { _id, active } = req.body;
  try {
    if (!_id || !active) throw Error(`faltan datos`);
    const respuesta = await cambiarActividad(_id, active);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message ? error.message : error });
  }
});

router.put("/:comand", async (req, res) => {
  const { comand } = req.params;
  let resp;
  try {
    if (comand !== "follow" && comand !== "unfollow")
      throw new Error(`el comando debe ser follow o unfollow`);

    if (comand == "follow") resp = await followBucket(req.body);
    else resp = await unfollowBucket(req.body);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ error: error.message ? error.message : error });
  }
});

router.delete("/", async (req, res) => {
  let { nombre } = req.query;
  try {
    if (!nombre) throw new Error(`faltan parametros`);
    const resp = await deleteBucket(nombre);
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({ error: error.message ? error.message : error });
  }
});

module.exports = router;
