const { Usuario } = require("../db");

const createUser = (full_name, email, password, country, phone) => Usuario.create({ full_name, email, password, country, phone });

const getUser = () => {
  const user = Usuario.findAll();
  return user;
};

const getUserById = (id) => {
  const product = Usuario.findByPk(id
  //   {
  //   include: [
  //     {
  //       model: Categoria,
  //       attributes: ["name"],
  //       through: { attributes: [] },
  //     },
  //   ],
  // }
  );
  return product;
};

module.exports = {
  createUser,
  getUser,
  getUserById
};
