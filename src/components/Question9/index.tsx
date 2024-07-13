import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question9: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Ferramentas e Tecnologias</h2>
            <h3>Quais funcionalidades ou características você acha que faltam nessas ferramentas?</h3>
            <input 
                type="checkBox"
                value="Melhor integração com sistemas de RH"
                onChange={handleCheckboxChange}
            ></input><h3>Melhor integração com sistemas de RH</h3>

            <input 
                type="checkBox"
                value="Análise de dados avançada"
                onChange={handleCheckboxChange}
            ></input><h3>Análise de dados avançada</h3>

            <input 
                type="checkBox"
                value="Melhor usabilidade para candidatos e recrutadores"
                onChange={handleCheckboxChange}
            ></input><h3>Melhor usabilidade para candidatos e recrutadores</h3>
            
        </ComponentQuestion>
    )
}

export default Question9;