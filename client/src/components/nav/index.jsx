import React from 'react';
import {Link} from "react-router-dom"

const Index = () => {
    return (
        <div>
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/RecipeCreate">Create new recipe</Link></li>
            </ul>
        </nav>
        </div>
    );
};

export default Index;