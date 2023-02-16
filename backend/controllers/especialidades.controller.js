const specialtySchema = require("../models/especialidades");

const conAgregarSpecialty = async (specialty) => {
  try {
    const resp = specialtySchema(specialty);
    await resp.save();
    return resp;
  } catch (error) {
    return error;
  }
};

const conBuscarSpecialty = async () => {
  try {
    const resp = await specialtySchema.find();
    return resp;
  } catch (error) {
    return error;
  }
};

module.exports = { conAgregarSpecialty, conBuscarSpecialty };
