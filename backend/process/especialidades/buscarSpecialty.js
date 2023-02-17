const {
  conBuscarSpecialty,
} = require("../../controllers/especialidades.controller");

const buscarSpecialty = () => {
  const resp = conBuscarSpecialty();
  return resp;
};

module.exports = { buscarSpecialty };
