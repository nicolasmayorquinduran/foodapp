import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux"
import {getDetailById} from "../../actions"
import estilos from "./pagination.module.css"


// Cada receta muestra su:
// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)

const Recipe = ({image, title, diets, id}) => {
    let dispatch = useDispatch();
    return (
        <div className={estilos.recetas} >
            <h2>{title}</h2>
            <img src={image} alt="not found" />
            <p>{diets}</p>
            <Link to ={`/recipeDetail/${id}`}>
            <button onClick={()=>dispatch(getDetailById(id))}> <h3>ver más</h3> <FontAwesomeIcon icon={faEye}/></button>
            </Link>
        </div>
    );
};

export default Recipe;