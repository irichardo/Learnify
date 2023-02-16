const { Router } = require("express");
const router = Router();
const {
  agregarSpecialty,
} = require("../process/especialidades/agregarSpecialty");

router.get("/", async (req, res) => {
  res.status(200).send("holis");
});

router.post("/", async (req, res) => {
  try {
    const respuesta = await agregarSpecialty(req.body);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
