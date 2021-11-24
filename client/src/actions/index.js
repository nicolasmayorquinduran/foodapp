const axios = require("axios");

export const getAllRecipes = (payload) => {

    return function (dispatch){
        return axios.get(`http://localhost:3001/recipes`)
        .then(recipes =>  dispatch({type:"GETALL", payload: recipes.data}))
    }
};

// export const getRecipesByName = (payload) => {
//     return function (dispatch){
//        return axios.get(`http://localhost:3001/recipes?name=${payload}`)
//        .then(results =>  dispatch({type:"SEARCH", payload: results.data})
//        )
//     }
// };

export const getDetailById = (payload) => {
    return function (dispatch){
        return axios.get(`http://localhost:3001/recipes/${payload}`)
        .then(results =>  dispatch({type:"DETAIL", payload: results.data})
        )
     }
};

// export const getDetailById = (payload) => {
//     return function (dispatch){
//         const res =  axios.get(`http://localhost:3001/recipes/${payload}`)
//         .then(results =>  dispatch({type:"DETAIL", payload: results.data}))
//      return res
    
//      }
// };

export const getTypes = (payload) => {
    return function (dispatch){
        return axios.get(`http://localhost:3001/types`).then(results => 
            dispatch({type:"TYPES", payload: results.data})
        )
        
    }
};

export const postRecipe = async (payload) => {
   return axios.post('http://localhost:3001/recipe', payload)
  .then(function (response) {
  })
  .catch(function (error) {
  });
};

