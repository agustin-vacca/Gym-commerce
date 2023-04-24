const {Categoria, Producto} = require('../db');

const createCategory =  ( name, description) =>
    Categoria.create({ name, description});

const getCategory = () => {
    const category = Categoria.findAll({
        include: [
            {
                model: Producto,
                attributes: ["id", "image"],
                through:{attributes:[] }
            }
        ]
    });
    return category;
}

module.exports = {
    createCategory,
    getCategory
}