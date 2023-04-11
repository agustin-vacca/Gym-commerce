const { Router } = require('express');
const express = require('express');

const UsersRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getUsersHandler, postUsersHandler } = require('../handlers/UsersHandler')

UsersRoutes.get('/', getUsersHandler);
UsersRoutes.post('/create', postUsersHandler);


module.exports = UsersRoutes;