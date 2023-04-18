const { Router } = require("express");
const express = require("express");

const UserRoutes = Router();

//Importo los handlers con la logica de las rutas
const {
  getUsersHandler,
  postUsersHandler,
  getUserHandler
} = require("../handlers/UsersHandler");

UserRoutes.get("/", getUsersHandler);
UserRoutes.post("/create", postUsersHandler);
UserRoutes.get("/:id", getUserHandler)

module.exports = UserRoutes;