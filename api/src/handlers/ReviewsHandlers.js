const { getReviews, createReview, getReviewsbyId } = require("../controllers/ReviewsControllers")
const { Reviews } = require("../db");

const getReviewsHandler = async(req,res) => {
    try {
        const { id } = req.query;

        let all = await getReviews(id);
        res.status(200).json(all);
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

const postReviewHandler = async (req,res) => {
    try {
        const { opinion, rating, user, item, create_date} = req.body;

        const newReview = await createReview( opinion, rating, user, item, create_date)
        await newReview.addProducto(item)
        res.status(201).json(`Nueva review añadida`);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

const deleteReviewHandler = async (req,res) => {
    const {id} = req.params;
    try {
    if(id){
        Reviews.destroy(
        { where: { id: id }
        });
        res.status(200).send("Review deleted")
    } else{
        res.status(404).send("Can't find such review")
    }
} catch (error) {
    console.log(error)
}
}; 

const getReviewByIdHandler = async (req,res) => {
    try {
        const { id } = req.params;
        const reviewsById = await getReviewsbyId(id);

        res.status(201).json(reviewsById);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
};


module.exports = {
    getReviewsHandler,
    postReviewHandler,
    deleteReviewHandler,
    getReviewByIdHandler
}