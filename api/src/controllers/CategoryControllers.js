const {Categoria} = require('../db');

const createCategory =  (id, name, description) =>
    Categoria.create({id, name, description});

const getCategory = () => {
    const category = Categoria.findAll();
    return category;
}

module.exports = {
    createCategory,
    getCategory
}