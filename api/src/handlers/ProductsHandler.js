//const {Op} = require("sequelize");

const getProductsHandler = async(req,res) => {
    try {
        res.status(200).send("GET MACHINES");
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

const postProductsHandler = async (req,res) => {
    try {
        res.status(201).send("Post MACHINES");
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

module.exports = {
    getProductsHandler,
    postProductsHandler
}