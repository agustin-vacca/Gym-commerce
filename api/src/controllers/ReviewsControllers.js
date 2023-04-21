const { Producto, Reviews, Usuario } = require("../db");
const { Op } = require("sequelize");

const createReview = (
    opinion,
    rating,
    item,
    usuario,
  ) => {
    create_date = new Date();
    offer = false;
    isactive = true;
    const newReview = Reviews.create({
        opinion,
        rating,
        item,
        usuario
    });
    return newReview;
  };

  const getReviews = () => {
      const reviews = Reviews.findAll({
        include: [
          {
            model: Producto,
            attributes: ["name", "image", "id"],
            through: { attributes: [] },
          },
          {
            model: Usuario,
            attributes: ["full_name"],
          },
        ],
      });
      return reviews;
  };

  module.exports = {
    getReviews,
  createReview,
  };