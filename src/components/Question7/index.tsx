import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question6: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();
 
    return(
        <ComponentQuestion>
            <h2>Desafios Comuns</h2>
            <h3>Com que frequência você recebe candidatos que não correspondem aos requisitos das vagas?</h3>
            <input 
                type="checkBox"
                value="Raramente"
                onChange={handleCheckboxChange}
            ></input><h3>Raramente</h3>

            <input 
                type="checkBox"
                value="Às vezes"
                onChange={handleCheckboxChange}
            ></input><h3>Às vezes</h3>

            <input 
                type="checkBox"
                value="Frequentemente"
                onChange={handleCheckboxChange}
            ></input><h3>Frequentemente</h3>
            
            <input 
                type="checkBox"
                value="Muito Frequentemente"
                onChange={handleCheckboxChange}
            ></input><h3>Muito Frequentemente</h3>

        </ComponentQuestion>
    )
}

export default Question6;