const axios = require("axios");

export const getAllRecipes = (payload) => {

    return function (dispatch){
        return axios.get(`http://localhost:3001/allrecipes`)
        .then(recipes => {
            dispatch({type:"GETALL", payload: recipes.data})
        })
    }
};

export const getRecipesByName = async (payload) => {
    return async function (dispatch){
        payload = await axios.get(`http://localhost:3001/recipes?name=${payload}`)
        dispatch({type:"GET", payload: payload.data})
    }
};

export const getDetailById = async (payload) => {
    return async function (dispatch){    
        payload = await axios.get(`http://localhost:3001/recipes/${payload}`)
        dispatch({type:"DETAIL", payload: payload.data})
    }
};

export const getTypes = async (payload) => {
    return async function (dispatch){
        payload = await axios.get(`http://localhost:3001/types`)
        dispatch({type:"TYPES", payload: payload.data})
        
    }
};

export const postRecipe = async (payload) => {
   return axios.post(payload)
};

