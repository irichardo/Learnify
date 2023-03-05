const {
  conTraerUno,
  conAgregarInfo,
} = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const modificarDatos = async ({
  _id,
  FirstName,
  LastName,
  Address,
  City,
  Country,
  State,
  social,
}) => {
  const otroId = new objectId(_id);
  const query1 = { _id: otroId };
  const user = await conTraerUno(query1);
  if (!user) throw new Error(`no se encontro al user: ${_id}`);

  const nuevaInfo = {
    FirstName: FirstName ? FirstName : user.FirstName,
    LastName: LastName ? LastName : user.LastName,
    Address: Address ? Address : user.Address,
    City: City ? City : user.City,
    Country: Country ? Country : user.Country,
    State: State ? State : user.State,
    social: {
      facebook: social.facebook ? social.facebook : user.social.facebook,
      instagram: social.instagram ? social.instagram : user.social.instagram,
      gitHub: social.gitHub ? social.gitHub : user.social.gitHub,
    },
  };
  const query2 = { $set: nuevaInfo };
  await conAgregarInfo(query1, query2);

  return await conTraerUno(query1);
};

module.exports = { modificarDatos };
