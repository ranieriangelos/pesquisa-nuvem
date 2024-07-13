import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question2: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Processo de Recrutamento</h2>
            <h3>Quanto tempo, em média, leva para preencher uma posição aberta?</h3>
            <input 
                type="checkBox"
                value="Menos de um mes"
                onChange={handleCheckboxChange}
            ></input><h3>Menos de 1 mês</h3>

            <input 
                type="checkBox"
                value="1-2 meses"
                onChange={handleCheckboxChange}
            ></input><h3>1-2 meses</h3>

            <input 
                type="checkBox"
                value="2-3 meses"
                onChange={handleCheckboxChange}
            ></input><h3>2-3 meses</h3>

            <input 
                type="checkBox"
                value="Mais de 3 meses"
                onChange={handleCheckboxChange}
            ></input><h3>Mais de 3 meses</h3>

        </ComponentQuestion>
    )
}

export default Question2;