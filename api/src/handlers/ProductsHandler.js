//const {Op} = require("sequelize");
const { getProducts, createProducts } = require("../controllers/ProductsController")
const getProductsHandler = async(req,res) => {
    try {
        const all = await getProducts();
        res.status(200).json(all);
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

const postProductsHandler = async (req,res) => {
    try {
        const { name, price, weight, description, image, stock, create_date, category} = req.body;

        const newProd = await createProducts( name, price, weight, description, image, category, stock, create_date)
        await newProd.addCategoria(category) 

        res.status(201).json(`Nuevo producto implementado: ${newProd.name}`);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

module.exports = {
    getProductsHandler,
    postProductsHandler
}