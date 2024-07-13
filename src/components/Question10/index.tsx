import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question10: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Satisfação e Melhorias</h2>
            <h3>Qual é a sua experiência geral com os sites de empregos que você usa atualmente?</h3>
            <input 
                type="checkBox"
                value="Muito satisfatória"
                onChange={handleCheckboxChange}
            ></input><h3>Muito satisfatória</h3>

            <input 
                type="checkBox"
                value="Satisfatória"
                onChange={handleCheckboxChange}
            ></input><h3>Satisfatória</h3>

            <input 
                type="checkBox"
                value="Neutra"
                onChange={handleCheckboxChange}
            ></input><h3>Neutra</h3>

<input 
                type="checkBox"
                value="Insatisfatoria"
                onChange={handleCheckboxChange}
            ></input><h3>Insatisfatória</h3>
            
        </ComponentQuestion>
    )
}

export default Question10;