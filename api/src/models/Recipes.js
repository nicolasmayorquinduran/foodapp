const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

//   [ ] Receta con las siguientes propiedades:
// ID: * ---> se crea automáticamente en la DB de recipes
// Nombre * ---> el campo se llama title, al igual que como en la API
// Resumen del plato * ---> el campo se llama summary, al igual que como en la API
// Puntuación ---> el campo se llama spoonacularScore, al igual que como en la API
// Nivel de "comida saludable" ---> el campo se llama healthScore, al igual que como en la API
// Paso a paso ---> el campo se llama analyzedInstructions, al igual que como en la API
// imagen ---> el campo se llama image, al igual que como en la API
// no está en el requerimiento inicial, pero se le va a dar la opción
// al usuario para que use alguna imágen de la api como portada,
// para que al hacer la búsqueda todas las recetas tengan imagen


  sequelize.define('recipes', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      // unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      summary: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.INTEGER,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    analyzedInstructions: {
      type: DataTypes.TEXT,
    },
  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }

  );

};
