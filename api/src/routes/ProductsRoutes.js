const { Router } = require('express');
const express = require('express');

const ProductsRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getProductsHandler,postProductsHandler, getProductsDetailHandler, deleteProductsHandler, putProductsHandler } = require('../handlers/ProductsHandler')

ProductsRoutes.get('/', getProductsHandler);
ProductsRoutes.post('/create', postProductsHandler);
ProductsRoutes.get('/:id', getProductsDetailHandler);
ProductsRoutes.delete('/:id', deleteProductsHandler);
ProductsRoutes.put('/change/:id', putProductsHandler);



module.exports = ProductsRoutes;