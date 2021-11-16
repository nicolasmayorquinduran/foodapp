import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios';
import {    getAllRecipes,
            getRecipesByName,
            getDetailById,
            getTypes,
            postRecipe,} from "../../actions"



const Index =  () => {

    const dispatch = useDispatch();
    useEffect(() =>{dispatch(getAllRecipes())},[])
    // const allRecipes = useSelector(state => state.allRecipes);

    return (
        <div>
            recipes
        </div>
    );
};

// const mapStateToProps = (state) => {
// return {allRecipes: state.allRecipes,
//         resultsSearch: state.resultsSearch,}
//     }

// const mapDispatchToProps = (dispatch) =>{
// return {getAllRecipes:() => dispatch(getAllRecipes()),
//         getRecipesByName: name => dispatch(getRecipesByName(name))}
// }

export default Index


