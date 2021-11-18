import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Recipe from "./recipe"
import {    getAllRecipes,
            getRecipesByName,
            getDetailById,
            getTypes,
            postRecipe,} from "../../actions"



const Index =  () => {

  let [page, setPage] = useState(9);

    const dispatch = useDispatch();
    useEffect(() =>{dispatch(getAllRecipes())},[])
    const allRecipes = useSelector(state => state.allRecipes);
    const resultsSearch = useSelector(state => state.resultsSearch)

    return (
        <div>
            <button onClick={()=> setPage(page-9)}>anterior</button>
            <button onClick={()=> setPage(page+9)}>siguiente</button>
            
        { resultsSearch.length===0 ?
           allRecipes.map((r,i) => {
              if(i>=page-9 && i<page){
                return <Recipe 
                title = {r.title}
                image={r.image} />
              }
            }):
            resultsSearch.map((r,i) => {
              if(i>=page-9 && i<page){
                return <Recipe 
                title = {r.title}
                image={r.image} />
              }
            })
        }
        </div>
    );
};


export default Index


