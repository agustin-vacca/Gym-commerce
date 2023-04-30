const { Usuario, Producto, Categoria, Reviews } = require("../db");
const { Op } = require("sequelize");

const getUser = () => {
  const user = Usuario.findAll();
  return user;
};

const getProducts = (name) => {
  if (name) {
    const product = Producto.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: [
        {
          model: Categoria,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Reviews,
          attributes: ["rating"],
          through: { attributes: [] },
        },
      ],
    });
    return product;
  } else {
    const products = Producto.findAll({
      include: [
        {
          model: Categoria,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Reviews,
          attributes: ["rating"],
          through: { attributes: [] },
        },
      ],
    });
    return products;
  }
};

const deleteUser = async (id) => {
  try {
    await Usuario.update({ isactive: false }, { where: { id: id } });
    return "User deleted";
  } catch (error) {
    return { error: error.message };
  }
};

const deleteProduct = async (id, isactive) => {
  try {
    const product = await Producto.findOne({ where: { id: id } });
    const cambio = async () => {
      await Producto.update({ isactive: isactive }, { where: { id: id } });
    };
    if (product.isactive) {
      //true  = no esta eliminado
      cambio();
      return "Property deleted";
    } else {
      cambio();
      return "Property restored";
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  getProducts,
  getUser,
  deleteUser,
  deleteProduct,
};
