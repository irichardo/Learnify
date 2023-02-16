const {
  conAgregarSpecialty,
} = require("../../controllers/especialidades.controller");

const agregarSpecialty = async (info) => {
  const resp = await conAgregarSpecialty(info);
  return resp;
};

module.exports = { agregarSpecialty };
