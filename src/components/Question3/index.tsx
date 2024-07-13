import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question3: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Processo de Recrutamento</h2>
            <h3>Quais métodos você usa atualmente para divulgar vagas de emprego?</h3>
            <input 
                type="checkBox"
                value="Sites de emprego (LinkedIn, Indeed, etc.)"
                onChange={handleCheckboxChange}
            ></input><h3>Sites de emprego (LinkedIn, Indeed, etc.)</h3>

            <input 
                type="checkBox"
                value="Redes sociais (Facebook, Twitter, etc.)"
                onChange={handleCheckboxChange}
            ></input><h3>Redes sociais (Facebook, Twitter, etc.)</h3>

            <input 
                type="checkBox"
                value="Agências de recrutamento"
                onChange={handleCheckboxChange}
            ></input><h3>Agências de recrutamento</h3>

            <input 
                type="checkBox"
                value="Referências internas"
                onChange={handleCheckboxChange}
            ></input><h3>Referências internas</h3>

        </ComponentQuestion>
    )
}

export default Question3;