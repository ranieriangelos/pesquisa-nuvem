import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question7: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Desafios Comuns</h2>
            <h3>Como você gerencia a comunicação com candidatos durante o processo de recrutamento?</h3>
            <input 
                type="checkBox"
                value="email"
                onChange={handleCheckboxChange}
            ></input><h3>Email</h3>

            <input 
                type="checkBox"
                value="Telefone"
                onChange={handleCheckboxChange}
            ></input><h3>Telefone</h3>

            <input 
                type="checkBox"
                value="Mensagens em redes sociais"
                onChange={handleCheckboxChange}
            ></input><h3>Mensagens em redes sociais</h3>
            
            <input 
                type="checkBox"
                value="Plataformas de recrutamento"
                onChange={handleCheckboxChange}
            ></input><h3>Plataformas de recrutamento</h3>

        </ComponentQuestion>
    )
}

export default Question7;