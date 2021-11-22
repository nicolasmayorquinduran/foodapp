import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Recipe from "./recipe"
import {    getAllRecipes} from "../../actions"
import {Link} from "react-router-dom"
import {matchDiets, allRecipes} from "../landing/filters"



const Index =  ({search, filter, dietsSelected}) => {

  let [state, setstate] = useState({
    page: 9,
    first : 0,
  });

    const dispatch = useDispatch();
    useEffect(() =>{dispatch(getAllRecipes())},[])


    return (
        <div>
            <button >anterior</button>
            <button >siguiente</button>

        {   filter(matchDiets(allRecipes,dietsSelected)).map((r,i) => {
             
            if(i!=state.first && r.title.toLowerCase().includes(search)){
              return <Recipe 
              title = {r.title}
              image={r.image} 
              diets={r.diets.join().replace("," , ", ")}
              />
            } else if (r.title.toLowerCase().includes(search)){
              return <div className='First-result'>
                <h3>{r.title}</h3>
                <h4>Diet Types</h4>
                <p>{r.diets.join().replace("," , ", ")}</p>
                <div className='degree'></div>
                <img src={r.image} alt="" />
                <img src={r.image} alt="" />
              </div>
            }
          })
        }
        </div>
    );
};


export default Index


