const axios = require("axios");

export const getAllRecipes = (payload) => {

    return function (dispatch){
        return axios.get(`http://localhost:3001/allrecipes`)
        .then(recipes =>  dispatch({type:"GETALL", payload: recipes.data}))
    }
};

export const getRecipesByName = (payload) => {
    return function (dispatch){
       return axios.get(`http://localhost:3001/recipes?name=${payload}`)
       .then(results =>  dispatch({type:"SEARCH", payload: results.data})
       )
    }
};

export const getDetailById = async (payload) => {
    return function (dispatch){
        return axios.get(`http://localhost:3001/recipes/${payload}`)
        .then(results =>  dispatch({type:"SEARCH", payload: results.data})
        )
     }
};

export const getTypes = async (payload) => {
    return async function (dispatch){
        payload = await axios.get(`http://localhost:3001/types`)
        dispatch({type:"TYPES", payload: payload.data})
        
    }
};

export const postRecipe = async (payload) => {
   return axios.post('http://localhost:3001/recipe', payload)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

