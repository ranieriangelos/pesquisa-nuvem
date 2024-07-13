import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question5: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Desafios Comuns</h2>
            <h3>Quais são os maiores desafios que você enfrenta na atração de candidatos qualificados?</h3>
            <input 
                type="checkBox"
                value="Concorrência com outras empresas"
                onChange={handleCheckboxChange}
            ></input><h3>Concorrência com outras empresas</h3>

            <input 
                type="checkBox"
                value="Encontrar candidatos com habilidades específicas"
                onChange={handleCheckboxChange}
            ></input><h3>Encontrar candidatos com habilidades específicas</h3>

            <input 
                type="checkBox"
                value="Retenção de talentos após a contratação"
                onChange={handleCheckboxChange}
            ></input><h3>Retenção de talentos após a contratação</h3>

            <h3>Outros (especificar)</h3>
            <input className="inputOutros"
                type="text"
            ></input>

        </ComponentQuestion>
    )
}

export default Question5;