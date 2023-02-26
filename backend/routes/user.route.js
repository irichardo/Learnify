const { Router } = require("express");
const router = Router();
const { traerTodos } = require("../process/user/traerTodos");
const { traerUno } = require("../process/user/traerUno");
const { modificarType } = require("../process/user/modificarType");
const { modificarTokens } = require("../process/user/modificarTokens");
const { traerPorType } = require("../process/user/traerPorType");

router.get("/", async (req, res) => {
  const { _id } = req.body;
  let respuesta;
  try {
    if (!_id) respuesta = await traerTodos();
    else respuesta = await traerUno(_id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const respuesta = await traerPorType(type);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.put("/", async (req, res) => {
  const { _id, tokens, type } = req.body;
  let respuesta;
  try {
    if (tokens && _id) respuesta = await modificarTokens(_id, tokens);
    else if (type && _id) respuesta = await modificarType(_id, type);
    else throw Error("faltan parametros");
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
