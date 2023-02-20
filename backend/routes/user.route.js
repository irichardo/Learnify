const { Router } = require("express");
const router = Router();
const { traerTodos } = require("../process/user/traerTodos");
const { traerUno } = require("../process/user/traerUno");
const { modificarType } = require("../process/user/modificarType");
const { modificarTokens } = require("../process/user/modificarTokens");

router.get("/", async (req, res) => {
  const { user } = req.body;
  let respuesta;
  try {
    if (!user) respuesta = await traerTodos();
    else respuesta = await traerUno(user);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.put("/", async (req, res) => {
  const { user, tokens, type } = req.body;
  let respuesta;
  try {
    if (tokens && user) respuesta = await modificarTokens(user, tokens);
    else if (type && user) respuesta = await modificarType(user, type);
    else throw Error("faltan parametros");
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
