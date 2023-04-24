const { Producto, Categoria, Reviews } = require("../db");
const { Op } = require("sequelize");

const createProducts = (
  name,
  price,
  weight,
  description,
  image,
  category,
  stock,
  create_date,
  isactive,
  offer,
  color
) => {
  create_date = new Date();
  offer = false;
  isactive = true;
  const newProd = Producto.create({
    name,
    price,
    weight,
    description,
    image,
    category,
    stock,
    create_date,
    isactive,
    offer,
    color,
  });
  return newProd;
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

const getProductsById = (id) => {
  const product = Producto.findByPk(id, {
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
};

const deleteProductById = (id) => {
    Producto.destroy(
    { where: { id: id }
    });
};

module.exports = {
  createProducts,
  getProducts,
  getProductsById,
  deleteProductById
};


