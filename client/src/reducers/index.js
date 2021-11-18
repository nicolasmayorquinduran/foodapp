const initialState = {
    allRecipes: [],
    recipeDetail: {},
    resultsSearch: [],
    recipeTypes:[],
  };

  const Reducer = (state = initialState, action) => {
    if (action.type === "GETALL") {
        return {...state, allRecipes: action.payload}
    }
    if (action.type === "SEARCH") {
        return {...state, resultsSearch: action.payload}
    }
    if (action.type === "DETAIL") {
        return state.recipeDetail = action.payload
    }
    if (action.type === "TYPES") {
        return state.recipeTypes = action.payload
    }    
    if (action.type === "POST") 

        return action.payload

    return state;
  }


  
  export default Reducer;