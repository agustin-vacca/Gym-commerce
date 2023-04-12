

const { DATE } = require("sequelize");
const { getProducts, createProducts, getProductsById } = require("../controllers/ProductsController")


const getProductsHandler = async(req,res) => {
    try {
        const { name } = req.query;

        let all = await getProducts(name);
        res.status(200).json(all);
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

const postProductsHandler = async (req,res) => {
    try {
        const { name, price, weight, description, image, stock, create_date, category, isactive, offer, color} = req.body;

        const newProd = await createProducts( name, price, weight, description, image, category, stock, create_date, isactive, offer, color)
        await newProd.addCategoria(category) 

        res.status(201).json(`Nuevo producto implementado: ${newProd.name}`);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

const getProductsDetailHandler = async (req,res) => {
    try {
        const { id } = req.params;
        const prodById = await getProductsById(id);

        res.status(201).json(prodById);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

const getProductsSearchBar = async (req,res) => {
    try {
        const { name } = req.query;
        const prodByName = await getProductsByName(name);

        res.status(201).json(prodByName);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}


module.exports = {
    getProductsHandler,
    postProductsHandler,
    getProductsDetailHandler,
    getProductsSearchBar
}