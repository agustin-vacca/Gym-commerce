require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//EJEMPLO PARA LLAMAR MODELO
//const mPet = require("./models/Pet");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// LLAMAMOS LOS MODELOS
//mUserLogin(sequelize);

// const { destructuring de los modelos } = sequelize.models;

// Aca vendrian las relaciones

// EJEMPLOS
// Pet.belongsToMany(Diseases, { through: "pet_diseases" });
// Diseases.belongsToMany(Pet, { through: "pet_diseases" });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
