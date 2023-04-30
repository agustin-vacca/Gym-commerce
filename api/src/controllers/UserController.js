const { Usuario } = require("../db");

const createUser = (name, given_name, family_name, email, email_verified, picture, sub, admin) => {
  admin = false;
  const newUser = Usuario.create({ name, given_name, family_name, email, email_verified, picture, sub, admin });
  return newUser;
}


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

const adminUserById = async(id, admin) => {
  await Usuario.update({
    admin: admin
  },{
    where: {
      id: id
    }
  });
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  adminUserById
};
