const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;

const modificarTokens = async (user, tokens) => {
  return `me pasaste estos tokens: ${tokens}`;
};

module.exports = { modificarTokens };
