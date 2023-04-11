const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categoria', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.ENUM( "Mancuernas", "Maquinas", "Rack", "Discos y Barras", "Accesorios"),
      allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }, {
    timestamps: false,
    freezeTableName: true,
  }
  );
};