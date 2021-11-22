import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes, faCarrot, faEgg, faCheese, faDrumstickBite, faUtensils, faBreadSlice} from "@fortawesome/free-solid-svg-icons"
import Step from './step';
import { postRecipe} from "../../actions"
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
            <form>
        
           <input 
           name = "title"
           type ="text" 
           placeholder='Recipe´s name'
           defaultValue =""
           onChange={e => handleValueForm(e)}
          >
            </input> 

            <textarea 
           name= "summary" 
           placeholder="Description"
           defaultValue =""
           onChange={e => handleValueForm(e)}
           >
            </textarea> 

            <div className='score'>
           <label>{`Score: ${!valuesForm.score? "50" : valuesForm.score}`}</label>
           <input 
           name="score" 
           type="range" 
           min="0" max="100" defaultValue="50"
           onChange={e => handleValueForm(e)}/>
           </div>

           <div className='healthScore'>
           <label>{`Health score: ${!valuesForm.healthScore? "50" : valuesForm.healthScore}`}</label>
           <input 
           name="healthScore"
           type="range"
           min="0"max="100" defaultValue="50"
           onChange={e => handleValueForm(e)}/>
            </div>

            <div className='steps'></div>
           <label>Steps Preparation</label>
           <textarea 
           name = "step"
           placeholder={`Describe step ${valuesForm.steps.length+1}`}
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
               Add other step</button> 

        <ul>
            {valuesForm.steps.map((e,i) => {
               return <li>
                   <h4>{`Step ${i+1}`}</h4>
                   <p>{e}</p>
                   <button name={i} onClick={e => e.preventDefault(handleRemoveStep(e))}>X</button>
               </li>
               
               
            })}
        </ul>
            
           
<div className='types'>

            <div className='diet'>
            <FontAwesomeIcon icon={faCarrot}/>
            <label>Vegetarian</label>
            <input name="vegetarian" 
            type="range" 
            min="0" max="1" 
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>

           <div className='diet'>
            <FontAwesomeIcon icon={faCarrot}/>
            <FontAwesomeIcon icon={faEgg}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Lacto Vegetarian</label>
           <input name="lacto-vegetarian" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
            <FontAwesomeIcon icon={faCarrot}/>
            <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Ovo Vegetarian</label>
           <input name="ovo-vegetarian" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faCheese}/>
           <FontAwesomeIcon icon={faEgg}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Vegan</label>
           <input name="vegan" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           </div>
           <div className='diet'>
            <FontAwesomeIcon icon={faDrumstickBite}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Pescetarian</label>
           <input name="pescetarian" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faDrumstickBite}/>
           <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Paleolithic</label>
           <input name="paleolithic" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faDrumstickBite}/>
           <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faCheck}/>
            <label>Primal</label>
           <input name="primal" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
            <FontAwesomeIcon icon={faBreadSlice}/>
            <FontAwesomeIcon icon={faCheese}/>
            <label>Low Fodmap</label>
           <input name="Low-fodmap" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
            <FontAwesomeIcon icon={faUtensils}/>
            <label>whole30</label>
           <input name="whole30" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Dairy-Free</label>
           <input name="dairy-free" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faBreadSlice}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Gluten Free</label>
           <input name="gluten-free" 
            type="range" 
            min="0" 
            max="1"
            defaultValue="0"
            onChange={e => e.target.value==1? handleAddDiet(e): handleRemoveDiet(e)}/>
           <input type="submit" onClick={()=> postRecipe(valuesForm)}></input>
           
            </div>
    
           </div>
        </form>
        </div>
    );
};

export default Index;