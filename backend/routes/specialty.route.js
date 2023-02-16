const { Router } = require("express");
const router = Router();
const {
  agregarSpecialty,
} = require("../process/especialidades/agregarSpecialty");
const {
  buscarSpecialty,
} = require("../process/especialidades/buscarSpecialty");

router.get("/", async (req, res) => {
  try {
    const todas = await buscarSpecialty();
    res.status(200).json(todas);
  } catch (error) {
    res.status(400).json(error);
  }
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
