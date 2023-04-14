const { getCategory, createCategory } = require("../controllers/CategoryControllers");
const category = require("../precharge/precharge")

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
        //const { name, description} = req.body;
        for ( let i = 0; i < category.length; i++){
            const newCat = await createCategory(category[i].name, category[i].description);
        }

        res.status(201).json("Categorias preestablecidas cargadas");
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

module.exports = {
    getCategoryHandler,
    postCategoryHandler
}