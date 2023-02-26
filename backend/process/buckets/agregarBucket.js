const { conAgregarBucket } = require("../../controllers/buckets.controllers");
const { conTraerUno } = require("../../controllers/user.controller");
const { conModificarTypeTock } = require("../../controllers/user.controller");
const objectId = require("mongodb").ObjectId;

const agregarBucket = async ({ nombre, usuario }) => {
  if (typeof usuario.aportes == "string") {
    throw new Error(`el atributo tokens debe ser un numero entero`);
  }

  const id = new objectId(usuario._id);
  const query = { _id: id };
  const user = await conTraerUno(query);
  if (!user) throw new Error(`no se encontro al user: ${id}`);
  console.log("buckets antes de agregar uno nuevo:", user.buckets);

  const bucket = {
    nombre: nombre,
    tokensActuales: usuario.aportes,
    activo: true,
    usuarios: [{ _id: id, aportes: usuario.aportes }],
  };
  const nuevoB = await conAgregarBucket(bucket);
  if (!nuevoB._id) throw new Error(`el nombre del bucket: ${nombre} ya existe`);

  console.log("nuevo bucket agregado:", nuevoB);

  const userTokens = user.tokens;
  const aux = (userTokens ? userTokens : 0) - usuario.aportes;
  if (aux < 0) {
    throw new Error(
      `no tiene saldo para realizar esta operacion, la cuenta dispone de solo ${userTokens} tokens`
    );
  }

  const query2 = {
    $set: {
      tokens: aux,
      buckets: [
        ...user.buckets,
        { bucketName: nuevoB.nombre, aportes: usuario.aportes },
      ],
    },
  };

  console.log("query para actualizar usuario:", query2);

  const resp = await conModificarTypeTock(query, query2);

  console.log("usuario actualizado:", resp);

  const updatedUser = await conTraerUno(query);

  console.log("buckets despues de agregar uno nuevo:", updatedUser);
};

module.exports = { agregarBucket };
