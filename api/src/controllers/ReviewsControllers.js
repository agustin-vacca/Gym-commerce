const { Producto, Reviews, Usuario } = require("../db");
const { Op } = require("sequelize");

const createReview = (
    opinion,
    rating,
    user,
    item,
  ) => {
    create_date = new Date();
    offer = false;
    isactive = true;
    const newReview = Reviews.create({
        opinion,
        rating,
        user,
        item,
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
        ],
      });
      return reviews;
  };


  module.exports = {
    getReviews,
  createReview,
  };