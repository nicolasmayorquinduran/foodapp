import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes, faCarrot, faEgg, faCheese, faDrumstickBite, faUtensils, faBreadSlice} from "@fortawesome/free-solid-svg-icons"
import Step from './step';
import { postRecipe} from "../../actions"
import estilos from "./recipeCreate.module.css"
// Font Awesome no es una librería de estilos, solo sirve para importar
// íconos y no tener que descargarlos en local



const Index = () => {

    let [counter, setCounter] = useState(1)

    const [valuesForm, setValuesForm] = useState({
            list:[],
            steps: [],
    })

    const handleValueForm = (e) =>{

        setValuesForm(
            {
                ...valuesForm,
                [e.target.name]: e.target.value
            }   
        ) 
    }

    const handleAddDiet = (e) =>
{   !valuesForm.list.includes(e.target.name)&&
    setValuesForm({
        ...valuesForm,
        list:[...valuesForm.list, e.target.name]
    })
}

const handleRemoveDiet = (e) =>{
    valuesForm.list.includes(e.target.name)&&
    setValuesForm({
        ...valuesForm,
        list:[...valuesForm.list.filter(diet => diet!=e.target.name)]}
    ) 
}

const handleRemoveStep = (e) =>{
    setValuesForm({
        ...valuesForm,
        steps:[...valuesForm.steps.filter((step,i)=> i!=e.target.name)]}
    ) 
}

console.log(valuesForm)

    return (
        <div>
            <form className={estilos.form}>
        <div className={estilos.nombre}>
           <input 
           name = "title"
           type ="text" 
           placeholder='Nombre de la receta'
           defaultValue =""
           onChange={e => handleValueForm(e)}
          >
            </input> 
        </div>

        <div className={estilos.resumen}>
            <textarea 
           name= "summary" 
           placeholder="   Resumen"
           defaultValue =""
           onChange={e => handleValueForm(e)}
           >
            </textarea> 
        </div>

            <div className={estilos.puntaje}>
           <label>{`Puntaje: ${!valuesForm.score? "50" : valuesForm.score}`}</label>
           <input 
           name="score" 
           type="range" 
           min="0" max="100" defaultValue="50"
           onChange={e => handleValueForm(e)}/>
           </div>

           <div className={estilos.puntaje_saludable}>
           <label>{`Nivel de "comida saludable": ${!valuesForm.healthScore? "50" : valuesForm.healthScore}`}</label>
           <input 
           name="healthScore"
           type="range"
           min="0"max="100" defaultValue="50"
           onChange={e => handleValueForm(e)}/>
            </div>

            <div className={estilos.pasos}>
           <label>Pasos de preparación</label>
           <textarea 
           name = "step"
           placeholder={`Describe el paso ${valuesForm.steps.length+1}`}
           onChange={e => handleValueForm(e)}
           >
           </textarea>
           <button 
           defaultValue = {counter}
           onClick={(e)=> e.preventDefault(
               setCounter(counter + 1),
               setValuesForm(
                   {
                       ...valuesForm,
                       steps:[...valuesForm.steps, valuesForm.step]
                   }
               )
               )} >
               Agregar</button> 
               </div>

        <div className={estilos.lista}>
        <ul>
            {valuesForm.steps.map((e,i) => {
               return <li>
                   <h4>{`Paso ${i+1}`}</h4>
                   <p>{e}</p>
                   <button name={i} onClick={e => e.preventDefault(handleRemoveStep(e))}>X</button>
               </li>
               
               
            })}
        </ul>
        </div>
            
           
<div className={estilos.dietas}>

            <div className={estilos.diet}>
            <label>Vegetarian</label>
            <input name="vegetarian" 
            type="range" 
            min="0" max="1" 
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>

           <div className={estilos.diet}>
            <label>Lacto Vegetarian</label>
           <input name="lacto-vegetarian" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Ovo Vegetarian</label>
           <input name="ovo-vegetarian" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Vegan</label>
           <input name="vegan" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           </div>
           <div className={estilos.diet}>
            <label>Pescetarian</label>
           <input name="pescetarian" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Paleolithic</label>
           <input name="paleolithic" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Primal</label>
           <input name="primal" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Low Fodmap</label>
           <input name="Low-fodmap" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>whole30</label>
           <input name="whole30" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Dairy-Free</label>
           <input name="dairy-free" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className={estilos.diet}>
            <label>Gluten Free</label>
           <input name="gluten-free" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
            <div>
           <input className={estilos.enviar} type="submit" onClick={()=> postRecipe(valuesForm)}></input>
           </div>
           
            </div>
    
           </div>
        </form>
        </div>
    );
};

export default Index;