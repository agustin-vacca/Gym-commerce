const { Router } = require('express');

const ReviewsRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getReviewsHandler, postReviewHandler } = require('../handlers/ReviewsHandlers')
 
ReviewsRoutes.get('/', getReviewsHandler);
ReviewsRoutes.post('/create', postReviewHandler);


module.exports = ReviewsRoutes;