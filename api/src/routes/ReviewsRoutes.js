const { Router } = require('express');

const ReviewsRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getReviewsHandler, postReviewHandler, deleteReviewHandler } = require('../handlers/ReviewsHandlers')
 
ReviewsRoutes.get('/', getReviewsHandler);
ReviewsRoutes.post('/create', postReviewHandler);
ReviewsRoutes.delete('/:id', deleteReviewHandler);


module.exports = ReviewsRoutes;