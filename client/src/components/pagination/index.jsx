import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Recipe from "./recipe"
import { getAllRecipes} from "../../actions"
import {matchDiets, arraysToArray} from "../landing/filters"
import estilos from "./pagination.module.css"


const Index =  ({search, filter, dietsSelected}) => {

  let [state, setstate] = useState({
    page: 9,
    first : 0,
  });
    
  let allRecipes = useSelector(state => state.allRecipes);
    const dispatch = useDispatch();
    useEffect(() =>{dispatch(getAllRecipes())},[])
    // allRecipes= arraysToArray(allRecipes)
    console.log(allRecipes[0])
    const handleNextPage = () =>{
      setstate(
        {
          ...state,
          page: state.page + 9,
          first: state.first + 9
        }
      )
      }

      const handleBeforePage = () =>{
        setstate(
          {
            ...state,
            page: state.page - 9,
            first: state.first - 9
          }
        )
        }
    return (
      
        <div >
            <button className={state.page - 9 > 0 ? estilos.button : estilos.none} onClick={() => handleBeforePage()} >anterior</button>
            <button className={state.page /9 <  allRecipes.length/9 ? estilos.button : estilos.none} onClick={() => handleNextPage()}>siguiente</button>

        {   filter(matchDiets(allRecipes,dietsSelected)).map((r,i) => {
             
            if(i!=state.first && i>state.page-9 && i<state.page && r.title.toLowerCase().includes(search)){
              return <Recipe 
              id={r.id}
              title = {r.title}
              image={r.image} 
              diets={r.diets.join().replace("," , ", ")
              
            }
              />
            } else if (i===state.first && r.title.toLowerCase().includes(search)){
              return <div className={estilos.first_result}>
                <div className={estilos.first_result_info}>
                <h3>{r.title}</h3>
                <h4>Diet Types</h4>
                <p>{r.diets.join().replace("," , ", ")}</p>
                </div>
                <div className={estilos.first_result_degrade}></div>
                <div className={estilos.first_result_fondo}>
                <img src={r.image} alt="" />
                <img src={r.image} alt="" />
                </div>
              </div>
            }
          })
        }
         <button className={state.page - 9 > 0 ? estilos.button : estilos.none} onClick={() => handleBeforePage()} >anterior</button>
            <button className={state.page /9 <  allRecipes.length/9 ? estilos.button : estilos.none} onClick={() => handleNextPage()}>siguiente</button>
        </div>

        
    );
};


export default Index


