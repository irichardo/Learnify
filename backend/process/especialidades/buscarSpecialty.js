const {
  conBuscarSpecialty,
} = require("../../controllers/especialidades.controller");

const buscarSpecialty = () => conBuscarSpecialty();

module.exports = { buscarSpecialty };
