const {Producto, Categoria} = require('../db');

const createProducts =  (id, name, price, weight, description, image, category, stock, create_date) =>
    Producto.create({id, name, price, weight, description, image, category, stock, create_date});

const getProducts = () => {
    const product = Producto.findAll({ 
        include: [
            {
                model: Categoria,
                attributes: ["id","name","description"],
                through: { attributes: [] },
            } 
        ]
    });
    return product;
}

module.exports = {
    createProducts,
    getProducts
}