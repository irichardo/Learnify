const { Router } = require("express");
const router = Router();
const { traerTodos } = require("../process/user/traerTodos");
const { traerUno } = require("../process/user/traerUno");
const { modificarType } = require("../process/user/modificarType");
const { modificarTokens } = require("../process/user/modificarTokens");
const { traerPorType } = require("../process/user/traerPorType");
const { modificarActividad } = require("../process/user/modificarActividad");

router.get("/", async (req, res) => {
  const { _id } = req.body;
  let respuesta;
  try {
    if (!_id) respuesta = await traerTodos();
    else respuesta = await traerUno(_id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

router.get("/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const respuesta = await traerPorType(type);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

router.put("/", async (req, res) => {
  const { _id, tokens, type, active, mail } = req.body;
  console.log(mail);
  let respuesta;
  try {
    if (_id && type && active)
      throw Error("solo puede cambiar un parametro a las vez");
    if (tokens && mail) respuesta = await modificarTokens(mail, tokens);
    else if (type && _id) respuesta = await modificarType(_id, type);
    else if (active && _id) respuesta = await modificarActividad(_id, active);
    else throw Error("faltan parametros");
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error.message ? error.message : error);
  }
});

module.exports = router;
