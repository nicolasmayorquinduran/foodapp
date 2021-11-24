import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faPlusSquare} from "@fortawesome/free-solid-svg-icons"
import estilos from "./nav.module.css"

const Index = () => {
    return (
        <>
        <nav className={estilos.nav}>
            <ul className={estilos.ul}>
                <li><Link className={estilos.a} to = "/"> 
                <div><FontAwesomeIcon icon={faHome}/></div>
                <div><h3 className={estilos.title}>Inicio</h3></div> </Link></li>
                <li><Link className={estilos.a} to = "/RecipeCreate"> 
                <div><FontAwesomeIcon icon={faPlusSquare}/></div>
                <div><h3 className={estilos.title}>Crear <br/> Receta</h3></div></Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Index;