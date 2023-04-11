const express = require("express");
const router = express.Router();
const {
  createLocation,
  getLocation,
} = require("../controllers-Pet/Location-controller");


router.get("/", getLocation); //trae todas las localizaciones
router.post("/", createLocation); //crea una localizacion


module.exports = router;