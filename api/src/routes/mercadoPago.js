const { PROD_ACCESS_TOKEN } = process.env;
const { Router } = require("express");

const Mercadopago = Router();

// SDK de Mercado Pago
var mercadopago = require('mercadopago');
// Agrega credenciales
mercadopago.configure({access_token: PROD_ACCESS_TOKEN,});



Mercadopago.post("/payment", (req,res) => {
  const prod = req.body;
let preference = {
  items: [{
      id:123,
      title: prod.title,
      currency_id:"ARS",
      picture_url: prod.image,
      description: prod.description,
      category_id:"art",
      quantity: 1,
      unit_price: prod.price,
    }]/* ,
  back_urls:{
    success: "http://localhost:3000/home",
    failure:"",
    pending:"",
  },
  auto_return: "approved",
  binary_mode: true, */
};
mercadopago.preferences
  .create(preference)
  .then((response) => res.status(200).send({response}))
  .catch((error) => res.status(400).send({error:error.message})); 
})
  

  module.exports = Mercadopago;