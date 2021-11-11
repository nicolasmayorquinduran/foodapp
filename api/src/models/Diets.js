const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// [ ] Tipo de dieta con las siguientes propiedades:
// ID
// Nombre

module.exports = (sequelize) => {
  // defino el modelo



sequelize.define('diets', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    // unique: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  list: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    unique: true,
  },
},{
  timestamps: false,
  createdAt: false,
  updatedAt: false
});


};



