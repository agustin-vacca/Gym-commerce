const { Producto, Reviews } = require("../db");
const { Op } = require("sequelize");

const createReview = (
    opinion,
    rating,
    item,
  ) => {
    create_date = new Date();
    offer = false;
    isactive = true;
    const newReview = Reviews.create({
        opinion,
        rating,
        item
    });
    return newReview;
  };

  const getReviews = (id) => {
    if (id) {
      const reviews = Reviews.findAll({
        where: {
          id: { [Op.iLike]: `%${id}%` },
        },
        include: [
          {
            model: Producto,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      return reviews;
    } else {
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
    }
  };

  module.exports = {
    getReviews,
  createReview,
  };