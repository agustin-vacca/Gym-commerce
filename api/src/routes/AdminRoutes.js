const { Router } = require("express");

const AdminRoutes = Router();

//Importo los handlers con la logica de las rutas
const { getAdmin, deleteAdmin } = require("../handlers/AdminHandler");

AdminRoutes.get("/", getAdmin);
AdminRoutes.put("/:direction/:id", deleteAdmin);

module.exports = AdminRoutes;
