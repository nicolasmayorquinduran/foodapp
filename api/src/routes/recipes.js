require('dotenv').config();
const {APIKEY} = process.env;
const axios = require("axios")
const { Recipes, Diets } = require ("../db");
const { Router } = require('express');
// const { types } = require('./types');
const { Sequelize } = require("sequelize");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// https://api.spoonacular.com/recipes/complexSearch?query=soup&addRecipeInformation=true&apiKey=1bbbcdbba30040ebbfe05db95d9ec9c2

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// [ ] GET /recipes?list="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
// const {image,
//     title,
//     dishTypes,
//     diets,
//     summary,
//     spoonacularScore,
//     healthScore  } = req.query

// }

router.get("/recipes", async (req, res)=>{

    //     (imagen, nombre, tipo de plato y tipo de dieta)
    // [ ] Resumen del plato
    // [ ] Puntuación
    // [ ] Nivel de "comida saludable"
    // [ ] Paso a paso
    
    try {
    const {list} = req.query;
    let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${list}&addRecipeInformation=true&apiKey=${APIKEY}`)
    .then(d => d.data.results)
    // console.log(result)
    let response = result.map(r => {
        return {
            id:r.id,
            image:r.image,
            title:r.title,
            diets: r.diets,
            summary: r.summary,
            spoonacularScore: r.spoonacularScore,
            healthScore: r.healthScore,
        }
    })

    const allNewRecipes = await Recipes.findAll();

    if(response.length<1 || allNewRecipes.length<1){
       return res.json({
        "results": [],
        "totalResults": 0
        })
    };
    res.json(allNewRecipes)

      } catch (error) {
        res.status(404).send("error" + error)
      }

    })
    

    
    // [ ] POST /recipe:
    // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    // Crea una receta en la base de datos

//     [ ] Un formulario controlado con los siguientes campos
// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas

    router.post("/recipe", async (req, res) => {   
      
      try{
        const defaultDiets = [
         {list:["vegetarian"]}
        ,{list:["lacto-vegetarian"]}
        ,{list:["ovo-vegetarian"]}
        ,{list:["vegan"]}
        ,{list:["pescetarian"]}
        ,{list:["paleolithic"]}
        ,{list:["primal"]}
        ,{list:["Low fodmap"]}
        ,{list:["whole30"]}
        ,{list:["dairy-free"]}
        ,{list:["gluten-free"]}]
        
        const diet = await Diets.findAll();
        if(diet.length === 0){
          await Diets.bulkCreate(defaultDiets)
        }
  
        const     {
          title,
          image,
          list,
          summary,
          spoonacularScore,
          healthScore,
      } = req.body;
       const newRecipe = await Recipes.create({
          title,
          image,
          summary,
          spoonacularScore,
          healthScore,
      });



      list.map(async (d) => {
        let newDiet = await Diets.findOne({
          where:{
            list:[d]
          }
        }
        )
        newRecipe.addDiets(newDiet)
      })

      // const newDiet = await Diets.create({list});
      // newRecipe.addDiets(newDiet);

      // await newRecipe.addDiets({list:["gluten-free"]})


      // if(list.length>0){
      //   newRecipe.addDiets(list)
      // }

      return res.send(`la receta ${title} ha sido creada`)
      //  const diet = await Recipes.findByPk(title);
      //  await Recipes.addDiets(diet)
      //  return  res.send(`la receta ${title} ha sido creada`);

      } catch(error){
        return res.send(error)
      }

      });



module.exports = router;
