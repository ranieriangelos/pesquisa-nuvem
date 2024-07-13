import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question11: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Satisfação e Melhorias</h2>
            <h3>O que você mais valoriza em um site de empregos?</h3>
            <input 
                type="checkBox"
                value="Qualidade das vagas listadas"
                onChange={handleCheckboxChange}
            ></input><h3>Qualidade das vagas listadas</h3>

            <input 
                type="checkBox"
                value="Facilidade de navegação"
                onChange={handleCheckboxChange}
            ></input><h3>Facilidade de navegação</h3>

            <input 
                type="checkBox"
                value="Recomendações personalizadas"
                onChange={handleCheckboxChange}
            ></input><h3>Recomendações personalizadas</h3>

<input 
                type="checkBox"
                value="Outros (especificar)"
                onChange={handleCheckboxChange}
            ></input><h3>Outros (especificar)</h3>
            
        </ComponentQuestion>
    )
}

export default Question11;