import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes, faCarrot, faEgg, faCheese, faDrumstickBite, faUtensils, faBreadSlice} from "@fortawesome/free-solid-svg-icons"
import {useSelect, useDispatch} from "react-redux"
// Font Awesome no es una librería de estilos, solo sirve para importar
// íconos y no tener que descargarlos en local



const Index = () => {

    let [counter, setCounter] = useState(1)

    const [valuesForm, setValuesForm] = useState({
   
            steps: [],
    })

    const handleSearch = (e) =>{

        setValuesForm(
            {
                ...valuesForm,
                [e.target.name]: e.target.value
            }   
        ) 
    }

    const handleAddStep = (e) =>{
        setCounter(counter++)
    }

    console.log(valuesForm, counter)

    return (
        <div>
        <form>
           <input 
           name = "title"
           type ="text" 
           placeholder='Recipe´s name'
           defaultValue =""
           onChange={e => handleSearch(e)}
          >
            </input> 

            <textarea 
           name= "summary" 
           placeholder="Description"
           defaultValue =""
           onChange={e => handleSearch(e)}
           >
            </textarea> 

            <div className='score'>
           <label>{`Score: ${!valuesForm.score? "50" : valuesForm.score}`}</label>
           <input 
           name="score" 
           type="range" 
           min="0" max="100" defaultValue="50"
           onChange={e => handleSearch(e)}/>
           </div>

           <div className='healthScore'>
           <label>{`Health score: ${!valuesForm.healthScore? "50" : valuesForm.healthScore}`}</label>
           <input 
           name="healthScore"
           type="range"
           min="0"max="100" defaultValue="50"
           onChange={e => handleSearch(e)}/>
            </div>

            <div className='steps'></div>
           <label>Steps Preparation</label>
           <textarea 
           name = {`step${counter}`} 
           placeholder={`Describe step ${counter}`}
           defaultValue =""
           onChange={e => handleSearch(e)}
           >
           </textarea>
           <button onClick={()=> setCounter(counter++)} >
               Add other step</button> 
               

           {/*

           
           
           <div className='types'>

            <div className='diet'>
            <FontAwesomeIcon icon={faCarrot}/>
            <label>Vegetarian</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>


           <div className='diet'>
            <FontAwesomeIcon icon={faCarrot}/>
            <FontAwesomeIcon icon={faEgg}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Lacto Vegetarian</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
            <FontAwesomeIcon icon={faCarrot}/>
            <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Ovo Vegetarian</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faCheese}/>
           <FontAwesomeIcon icon={faEgg}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Vegan</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           </div>
           <div className='diet'>
            <FontAwesomeIcon icon={faDrumstickBite}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Pescetarian</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faDrumstickBite}/>
           <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Paleolithic</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faDrumstickBite}/>
           <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faCheck}/>
            <label>Primal</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
            <FontAwesomeIcon icon={faBreadSlice}/>
            <FontAwesomeIcon icon={faCheese}/>
            <label>Low Fodmap</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
            <FontAwesomeIcon icon={faUtensils}/>
            <label>whole30</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faCheese}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Dairy-Free</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           </div>

           <div className='diet'>
           <FontAwesomeIcon icon={faBreadSlice}/>
            <FontAwesomeIcon icon={faTimes}/>
            <label>Gluten Free</label>
           <input name="slider" type="range" min="0" max="1" value="0"/>
           <input type="submit"></input>
           </div>
    
           </div> */}
        </form>
        </div>
    );
};

export default Index;