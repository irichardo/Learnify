const { Router } = require("express");
const router = Router();

const { traerTodos } = require("../process/user/traerTodos");

router.get("/", async (req, res) => {
  try {
    const respuesta = await traerTodos();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
