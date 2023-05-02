const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('reviews', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    opinion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating:{
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        }
    },
    
     user: {
        type: DataTypes.STRING,
        allowNull: false,
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