const axios = require("axios")
const { recipe, diets } = require ("../db");
const { Router } = require('express');
// const { recipes, types } = require('../routes');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipes = require('./recipes');
const types = require('./types');

const router = Router();

// Configurar los routers

router.use("/", recipes)
router.use("/", types)


module.exports = router;
