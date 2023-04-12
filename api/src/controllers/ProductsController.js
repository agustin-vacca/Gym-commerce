const {Producto, Categoria} = require('../db');

const createProducts =  ( name, price, weight, description, image, category, stock, create_date) =>
    Producto.create({ name, price, weight, description, image, category, stock, create_date});

const getProducts = () => {
    const products = Producto.findAll({ 
        include: [
            {
                model: Categoria,
                attributes: ["name"],
                through: { attributes: [] },
            } 
        ]
    });
    return products;
}

const getProductsById = (id) => {
    const product = Producto.findByPk(id, {
        include: [
            {
                model: Categoria,
                attributes: ["name"],
                through: { attributes: [] },
            } 
        ]
    })
    return product;
}


module.exports = {
    createProducts,
    getProducts,
    getProductsById,

}