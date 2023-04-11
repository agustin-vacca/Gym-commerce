const { Router } = require("express");
const router = Router();

const Autenticacion = require("../middleware/Autenticacion");
const middlewareToken = require("../middleware/middlewareToken");
const allRoutes = require("./allRoutes");

  //===================
 //const checkJwt = Autenticacion();
 //router.use(checkJwt);
 //checkJwt.unless({ path:[ "/" ] })
router.use("/api",allRoutes);


module.exports = router;

