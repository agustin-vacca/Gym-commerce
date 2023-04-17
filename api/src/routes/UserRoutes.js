const { Router } = require("express");
const express = require("express");

const UserRoutes = Router();

//Importo los handlers con la logica de las rutas
const {
  getUsersHandler,
  postUsersHandler,
} = require("../handlers/UsersHandler");

UserRoutes.get("/", getUsersHandler);
UserRoutes.post("/create", postUsersHandler);

module.exports = UserRoutes;