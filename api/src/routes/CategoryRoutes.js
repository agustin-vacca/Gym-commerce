const { Router } = require('express');
const express = require('express');

const CategoryRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getCategoryHandler, postCategoryHandler } = require('../handlers/CategoryHandler')

CategoryRoutes.get('/', getCategoryHandler);
CategoryRoutes.post('/create', postCategoryHandler);


module.exports = CategoryRoutes;