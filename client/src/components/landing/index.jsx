import React, {useEffect, useState} from 'react';
import {useSelect, useDispatch} from "react-redux"
import Pagination from '../pagination';
import { getRecipesByName} from "../../actions"

const Index = () => {

    let [search, setSearch] = useState("");
    let handleSearch = (e)=> setSearch(e.target.value);
   const dispatch = useDispatch();
    
    console.log(search)

    return (
        <div>
            <input type="text" onChange={(e)=>handleSearch(e)}></input>
            <button onClick={()=>dispatch(getRecipesByName(search))}>Search</button>
            <Pagination/>
        </div>
    );
};

export default Index;