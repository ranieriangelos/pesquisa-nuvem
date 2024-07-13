import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";


const Question1: React.FC = () =>{
    
    const { selectedOptions, handleCheckboxChange } = useCheckBox();
    return(
        <ComponentQuestion>
            <h2>Processo de Recrutamento</h2>
            <h3>Quais as etapas mais desafiadoras do seu processo de recrutamento?</h3>
            <input 
                type="checkBox"
                value="Seleção  inicial de candidatos"
                onChange={handleCheckboxChange}
            ></input><h3>Seleção inicial de candidatos</h3>

            <input 
                type="checkBox"
                value="Seleção  inicial de candidatos"
                onChange={handleCheckboxChange}
            ></input><h3>Entrevistas</h3>

            <input 
                type="checkBox"
                value="Seleção  inicial de candidatos"
                onChange={handleCheckboxChange}
            ></input><h3>Avaliações técnicas</h3>

            <input 
                type="checkBox"
                value="Seleção  inicial de candidatos"
                onChange={handleCheckboxChange}
            ></input><h3>Negociação de salários e benefícios</h3>

        </ComponentQuestion>
    )
}

export default Question1;