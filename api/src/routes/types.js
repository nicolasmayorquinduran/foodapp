const axios = require("axios");
const { Recipes, Diets } = require("../db");
const { Router } = require("express");
const { Op } = require("sequelize");

// const { recipes } = require('./recipes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// https://api.spoonacular.com/recipes/complexSearch?query=soup&addRecipeInformation=true&apiKey=1bbbcdbba30040ebbfe05db95d9ec9c2

const router = Router();

// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  if (isNaN(Number(id))) {
    try {
      const diet = await Recipes.findOne({
        where: {
          id
      },
      include: [
          { model: Diets,
            attributes: ['list']
          },
      ]
  }
    )
       res.json(diet);
    } catch (error) {
       res.status(400).json(error.parent.hint)
    }
  } 
  else {
    try {
      let result = await axios
        .get(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=1bbbcdbba30040ebbfe05db95d9ec9c2`
        )
        .then((d) => {
          delete d.data.extendedIngredients;
          return d.data;
        });

      return res.json({
        id: result.id,
        image: result.image,
        title: result.title,
        dishTypes: result.dishTypes,
        summary: result.summary,
        spoonacularScore: result.spoonacularScore,
        healthScore: result.healthScore,
      });
    } catch (error) {
      return res.json(id);
    }
  }
});

// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

router.get("/types", async (req, res) => {
  try {
    const defaultDiets = [
      { list: ["vegetarian"] },
      { list: ["lacto-vegetarian"] },
      { list: ["ovo-vegetarian"] },
      { list: ["vegan"] },
      { list: ["pescetarian"] },
      { list: ["paleolithic"] },
      { list: ["primal"] },
      { list: ["Low fodmap"] },
      { list: ["whole30"] },
      { list: ["dairy-free"] },
      { list: ["gluten-free"] },
    ];

    const diet = await Diets.findAll();
    if (diet.length === 0) {
      await Diets.bulkCreate(defaultDiets);
    }

    res.json(defaultDiets);
  } catch (error) {
    res.status(400).json(error);
  }
});

/*
TIPOS DE DIETAS


*/

module.exports = router;
