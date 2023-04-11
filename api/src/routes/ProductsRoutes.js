const { Router } = require('express');
const express = require('express');

const ProductsRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getProductsHandler,postProductsHandler } = require('../handlers/ProductsHandler')

ProductsRoutes.get('/', getProductsHandler);
ProductsRoutes.post('/create', postProductsHandler);


module.exports = ProductsRoutes;