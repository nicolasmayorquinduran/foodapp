import React, {useEffect} from 'react';
import './App.css';
import Landing from './components/landing';
import RecipeCreate from './components/recipeCreate';
import RecipeDetail from './components/recipeDetail';
import {useDispatch} from "react-redux";
import { getAllRecipes } from "./actions"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route exact path="/RecipeCreate" element={<RecipeCreate/>}/>
          <Route exact path="/recipeDetail" element={<RecipeDetail/>}/>
          <Route path="*" element={'no existe esta pag'}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
