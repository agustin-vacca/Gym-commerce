const { PROD_ACCESS_TOKEN } = process.env;
const { Router } = require("express");

const Mercadopago = Router();

// SDK de Mercado Pago
const mercadopago = require('mercadopago');
const { getProductsById } = require("../controllers/ProductsController");
// Agrega credenciales
mercadopago.configure({access_token: PROD_ACCESS_TOKEN,});



const getProductForPurchase = async (id) => {
  prod = await getProductsById(id)
  return prod
}

Mercadopago.use("/payment/:id", async (req,res) => {
  const {id} = req.params
  const prod = await getProductForPurchase(id)
let preference = {
  items: [{
      title: prod.name,
      currency_id:"ARS",
      picture_url: prod.image,
      description: prod.description,
      category_id:"art",
      quantity: 1,
      unit_price: prod.price,
    }] ,
  back_urls:{
    success: "http://localhost:3000/home",
    failure:"",
    pending:"",
  },/*
  auto_return: "approved",
  binary_mode: true, */
};
mercadopago.preferences
  .create(preference)
  .then((response) => res.status(200).send(`${response.body.init_point}`))
  .catch((error) => res.status(400).send({error:error.message})); 
})
  

  module.exports = Mercadopago;