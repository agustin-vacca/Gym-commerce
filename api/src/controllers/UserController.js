const { Usuario } = require("../db");

const createUser = async(name, given_name, family_name, email, email_verified, picture, sub, admin) => {
  const newUser = await Usuario.findOrCreate({
    where: { email: email },
    defaults: {
      name: name,
      picture: picture,
      given_name: given_name,
      family_name: family_name,
      email: email,
      admin: false,
      email_verified: email_verified,
      sub: sub,
    },
  });
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
