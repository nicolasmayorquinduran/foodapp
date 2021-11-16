import React from 'react';

// Cada receta muestra su:
// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)

const recipe = ({image, title, diets}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt="not found" />
        </div>
    );
};

export default recipe;