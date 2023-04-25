const { Producto, Reviews, Usuario } = require("../db");

const createReview = (
    opinion,
    rating,
    user,
    item,
    create_date
  ) => {
    create_date = new Date();
    const newReview = Reviews.create({
        opinion,
        rating,
        user,
        item,
        create_date
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

  const getReviewsbyId = (id) => {
    const reviews = Reviews.findByPk(id,{
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
    getReviewsbyId
  };