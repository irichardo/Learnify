const {
  conAgregarSpecialty
} = require("../../controllers/especialidades.controller");

const agregarSpecialty = (info) => {
  const resp = conAgregarSpecialty(info)
  return resp
}

module.exports = { agregarSpecialty };
