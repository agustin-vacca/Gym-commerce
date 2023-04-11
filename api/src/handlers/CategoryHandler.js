//const {Op} = require("sequelize");
const { getCategory, createCategory } = require("../controllers/CategoryControllers")

const getCategoryHandler = async(req,res) => {
    try {
        const all = await getCategory();
        res.status(200).json(all);
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

const postCategoryHandler = async (req,res) => {
    try {
        const { name, description} = req.body;

        const newCat = await createCategory( name, description);
        res.status(201).json(`Nueva categoria implementada: ${newCat.name}`);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

module.exports = {
    getCategoryHandler,
    postCategoryHandler
}