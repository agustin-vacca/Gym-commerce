const { getReviews, createReview } = require("../controllers/ReviewsControllers")

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
        const { opinion, rating, item, usuario} = req.body;

        const newReview = await createReview( opinion, rating, item, usuario)
        await newReview.addProducto(item)
        await newReview.addUsuario(usuario)
        res.status(201).json(`Nueva review añadida`);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}



module.exports = {
    getReviewsHandler,
    postReviewHandler,
}