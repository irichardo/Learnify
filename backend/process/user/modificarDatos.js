const { conTraerUno } = require("../../controllers/user.controller");
const { conAgregarInfo } = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const modificarDatos = async ({
  _id,
  FirstName,
  LastName,
  EmailAddress,
  Address,
  City,
  Country,
  State,
}) => {
  const otroId = new objectId(_id);
  const query1 = { _id: otroId };
  const user = await conTraerUno(query1);
  if (!user) throw new Error(`no se encontro al user: ${_id}`);

  const nuevaInfo = {
    FirstName: FirstName ? FirstName : user.FirstName,
    LastName: LastName ? LastName : user.LastName,
    EmailAddress: EmailAddress ? EmailAddress : user.EmailAddress,
    Address: Address ? Address : user.Address,
    City: City ? City : user.City,
    Country: Country ? Country : user.Country,
    State: State ? State : user.State,
  };
  const query2 = { $set: nuevaInfo };
  await conAgregarInfo(query1, query2);

  return await conTraerUno(query1);
};

module.exports = { modificarDatos };
