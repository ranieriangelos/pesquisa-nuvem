import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question4: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();
 
    return(
        <ComponentQuestion>
            <h2>Processo de Recrutamento</h2>
            <h3>Como você avalia a eficácia dos diferentes métodos de divulgação de vagas que você utiliza?</h3>
            <input 
                type="checkBox"
                value="Muito eficazes"
                onChange={handleCheckboxChange}
            ></input><h3>Muito eficazes</h3>

            <input 
                type="checkBox"
                value="Moderadamente eficazes"
                onChange={handleCheckboxChange}
            ></input><h3>Moderadamente eficazes</h3>

            <input 
                type="checkBox"
                value="Pouco eficazes"
                onChange={handleCheckboxChange}
            ></input><h3>Pouco eficazes</h3>

        </ComponentQuestion>
    )
}

export default Question4;