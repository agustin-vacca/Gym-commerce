const { PROD_ACCESS_TOKEN } = process.env;
const { Router } = require("express");
const { getProductsById } = require("../controllers/ProductsController");

const Mercadopago = Router();
const mercadopago = require('mercadopago');
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
    failure: "http://localhost:3000/home",
    pending: "http://localhost:3000/home",
  },/*
  auto_return: "approved",
  binary_mode: true, */
};
mercadopago.preferences
  .create(preference)
  .then((response) => res.status(200).send(`${response.body.init_point}`))
  .catch((error) => res.status(400).send({error:error.message})); 
})




Mercadopago.post("/create_preference", (req, res) => {
  const prodcuts = Array.isArray(req.body) ? req.body: [req.body];
  let preference = {
		items: prodcuts.map((products) =>({
      id: products.id,
      unit_price: products.unit_price,
      quantity:products.cantidad,
			title: products.name,
      currency_id:"ARS",
      picture_url: products.image,
      description: products.description,
      category_id:"gim",
    })),
		back_urls: {
			"success": "http://localhost:3000/home",
			"failure": "http://localhost:3000/home",
			"pending": "http://localhost:3000/home"
		},
 		auto_return: "approved",	
};

	mercadopago.preferences
  .create(preference)
  .then((response) => res.status(200).send(`${response.body.init_point}`))
  .catch((error) => res.status(400).send({error:error.message})); 
});

Mercadopago.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
}); 

  module.exports = Mercadopago;