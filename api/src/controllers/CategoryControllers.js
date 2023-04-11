const {Categoria} = require('../db');

const createCategory =  ( name, description) =>
    Categoria.create({ name, description});

const getCategory = () => {
    const category = Categoria.findAll();
    return category;
}

module.exports = {
    createCategory,
    getCategory
}