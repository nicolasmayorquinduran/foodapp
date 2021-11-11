const axios = require("axios")
const { Recipes, Diets } = require ("../db");
const { Router } = require('express');
// const { recipes } = require('./recipes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// https://api.spoonacular.com/recipes/complexSearch?query=soup&addRecipeInformation=true&apiKey=1bbbcdbba30040ebbfe05db95d9ec9c2

const router = Router();

    // [ ] GET /recipes/{idReceta}:
    // Obtener el detalle de una receta en particular
    // Debe traer solo los datos pedidos en la ruta de detalle de receta
    // Incluir los tipos de dieta asociados
    
    router.get("/recipes/:id", async (req, res)=>{

        try {
            const{id} = req.params
            let result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=1bbbcdbba30040ebbfe05db95d9ec9c2`)
            .then(d => {
                delete d.data.extendedIngredients
                return d.data
            })

            res.json({
                  id:result.id,
                  image:result.image,
                  title:result.title,
                  dishTypes: result.dishTypes,
                  diets: result.diets,
                  summary: result.summary,
                  spoonacularScore: result.spoonacularScore,
                  healthScore: result.healthScore,
          })
        
              } catch (error) {
                res.status(404).send(error)
              }
    })
    
    // [ ] GET /types:
    // Obtener todos los tipos de dieta posibles
    // En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
    
    // defaultTypes.map(t => )
    router.get("/types", async (req, res)=>{


        

    })

/*
TIPOS DE DIETAS


*/

module.exports = router;
