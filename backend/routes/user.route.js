const { Router } = require("express");
const router = Router();
const { traerTodos } = require("../process/user/traerTodos");
const { traerUno } = require("../process/user/traerUno");

router.get("/", async (req, res) => {
  const { user } = req.body;
  try {
    let respuesta;
    if (!user) respuesta = await traerTodos();
    else respuesta = await traerUno(user);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
