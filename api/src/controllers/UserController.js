const { Usuario } = require("../db");

const createUser = (name, email) => Usuario.create({ name, email });

const getUser = () => {
  const user = Usuario.findAll();
  return user;
};

module.exports = {
  createUser,
  getUser,
};
