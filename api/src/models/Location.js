const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Location', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    province:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });
};