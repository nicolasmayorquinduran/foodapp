import React, {useState} from 'react';
import { useDispatch} from "react-redux"
import Pagination from '../pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const filters = require("./filters")

const Index = () => {

    let [state, setState] = useState({
        filter:r => r,
        search:"",
        SelectedDiets:[]
    });

    const handleFilters = (e) =>{

        setState(
            {
                ...state,
                filter: filters[e.target.value]
            }   
        ) 
    }

    const handleSearch = (e)=>{
        setState(
            {
                ...state,
                search:e.target.value.toLowerCase()
            }
        )
    }

    const handleDiets = (e)=>{
        !state.SelectedDiets.includes(e.target.value) &&
        setState(
            {
                ...state,
                SelectedDiets:[...state.SelectedDiets, e.target.value ]
            }
        )
    }
    // let handleSearch = (e)=> setSearch(e.target.value);
    
    console.log(state)

    return (
        <>
            <h1>¿Qué receta buscas?</h1>
            <input onChange={e => handleSearch(e)}  type="text" ></input>
            <button><FontAwesomeIcon icon={faSearch}/></button>

            <div className='filters'>

<select onClick={(e)=> handleFilters(e)} name="filters">
    <optgroup label="Alph order">
    <option value="Az">Az</option>
    <option value="Za">Za</option>
    </optgroup>

    <optgroup label="Score">
    <option value="higherScore">higherScore</option>
    <option value="lowerScore">lowerScore</option>
    </optgroup>

</select>

    <div className='diets'>
    <input onClick={e => handleDiets(e)} type="checkbox" value="vegetarian"/> <label>Vegetarian</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="lacto-vegetarian"/><label>lacto vegetarian</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="ovo-vegetarian"/><label>ovo vegetarian</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="vegan"/><label>vegan</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="pescetarian"/><label>pescetarian</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="paleolithic"/><label>paleolithic</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="primal"/><label>primal</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="low-fodmap"/><label>low fodmap</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="whole30"/><label>whole30</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="dairy-free"/><label>dairy free</label>
    <input onClick={e => handleDiets(e)} type="checkbox" value="gluten-free"/><label>gluten free</label>
    </div>


            </div>
            <Pagination search = {state.search} filter ={state.filter} dietsSelected={state.SelectedDiets}/>
        </>
    );
};

// ()=>dispatch(getRecipesByName(search))

export default Index;