const {Producto} = require('../db');

const createProducts =  (id, name, price, weight, description, image, categorias, stock, create_date) =>
    Producto.create({id, name, price, weight, description, image, categorias, stock, create_date});

const getProducts = () => {
    const product = Producto.findAll();
    return product;
}

module.exports = {
    createProducts,
    getProducts
}