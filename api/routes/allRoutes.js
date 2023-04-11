const express = require("express");
const router2 = express.Router();

const Pet = require("./Mascota-routes");
const Vaccines = require("./Vaccines-routes");
const Diseases = require("./Diseases-routes");
const Location = require("./Location-routes");
const Usuario = require("./Usuario-routes");
const Payment = require("./Payment-routes");

  //===================
  
router2.get("/", (req, res) => {
    res.status(200).send("Su token de acceso fue verificado satisfactoriamente!!");
})
router2.use("/pets", Pet);
router2.use("/vaccines", Vaccines);
router2.use("/diseases", Diseases);
router2.use("/locations", Location);
router2.use("/users", Usuario);
router2.use("/payments",Payment);


module.exports = router2;