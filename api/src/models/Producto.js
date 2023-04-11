const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    weight:{
      type: DataTypes.INTEGER
    },

    description: {
      type: DataTypes.STRING
    },

    image:{
      type: DataTypes.STRING
    },

    category:{
      type: DataTypes.STRING,
      allowNull: false
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    create_date: {
      type: DataTypes.DATEONLY,
    },

  }, {
    timestamps: false,
    freezeTableName: true,
  }
  );
};
