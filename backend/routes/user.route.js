const { Router } = require("express");
const router = Router();
const { crearUsuario } = require("../process/user/crearUsuario");

router.post("/", async (req, res) => {
  try {
    const respuesta = await crearUsuario(req.body);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
