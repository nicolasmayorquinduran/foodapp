import React, {useEffect} from 'react';
import {useSelector} from "react-redux"
import { useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux"
import {getDetailById} from "../../actions"

// Ruta de detalle de receta: debe contener

// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Puntuación
// [ ] Nivel de "comida saludable"
// [ ] Paso a paso

const Index = () => {
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() =>   dispatch( getDetailById(Number(id))))
    const recipe = useSelector(state => state.recipeDetail)

    console.log(recipe)
    return (
        <>
           <div className='cover'>
               <h1>{recipe.title}</h1>
               <img src={recipe.image} alt="" />
               <div className='degree'></div>
           </div>
           <div className='info'>

                <div className='score'>
                    <h3>{recipe.healthScore}</h3>
                    <p>{recipe.imgage}</p>
                    <FontAwesomeIcon icon={faStar}/>
                </div>

                <div className='diets'>
                    <h3>Apto para dietas</h3>
                    <ul className='diets'>
                        { recipe.diets.length > 0 ?
                        recipe.diets.map(r =>{
                            return <li>
                                {r}
                            </li>
                        }):
                        <li>La receta no tiene dietas asociadas</li>
                    }
                    </ul>
                </div>

                <div className='dish-types'>
                    <h3>Tipos de plato</h3>
                    <ul className='dish-types'>
                        { recipe.dishTypes.length > 0  ?
                        recipe.dishTypes.map(r =>{
                            return <li>
                                {r}
                            </li>
                        }):
                        <li>La receta no tipos tiene de plato asociados</li>
                    }
                    </ul>
                </div>

                <div className='steps'>
                    <h3>Paso a paso</h3>
                    <ul className='steps'>
                        { recipe.steps.length > 0 ? 
                        recipe.steps.map(r =>{
                            return  <li>
                               <h3> {`Step${r.number}`} </h3>
                               <p>{r.step}</p>
                            </li>
                        }):
                        <li>La receta no tiene instrucciones asociadas</li>
                        }
                    </ul>
                </div>

           </div>
        </>
    );
};

export default Index;