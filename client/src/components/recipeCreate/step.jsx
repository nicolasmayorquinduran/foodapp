import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons"


const Step = ({id, title, description, onClose}) => {
    return (
        <> 
            <li id="closeIcon" key={id} name={id}>
            <label>{title}</label>
            <p>{description}</p>
            <button name={id} onClick={onClose}>x</button>
            </li>
        </>
    );
};

export default Step;