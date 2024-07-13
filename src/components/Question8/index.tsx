import React, { useState } from "react";
import {ComponentQuestion} from './style';
import { useCheckBox } from "../../utils/handleCheckBox";

const Question8: React.FC = () =>{
    const { selectedOptions, handleCheckboxChange } = useCheckBox();

    return(
        <ComponentQuestion>
            <h2>Ferramentas e Tecnologias</h2>
            <h3>Quais ferramentas ou plataformas de recrutamento você usa atualmente?</h3>
            <input 
                type="checkBox"
                value="LinkedIn Recruiter"
                onChange={handleCheckboxChange}
            ></input><h3>LinkedIn Recruiter</h3>

            <input 
                type="checkBox"
                value="Indeed"
                onChange={handleCheckboxChange}
            ></input><h3>Indeed</h3>

            <input 
                type="checkBox"
                value="Glassdoor"
                onChange={handleCheckboxChange}
            ></input><h3>Glassdoor</h3>
            
            <input 
                type="checkBox"
                value="ZipRecruiter"
                onChange={handleCheckboxChange}
            ></input><h3>ZipRecruiter</h3>

            <input 
                type="checkBox"
                value="Catho"
                onChange={handleCheckboxChange}
            ></input><h3>Catho</h3>

<input 
                type="checkBox"
                value="infojob"
                onChange={handleCheckboxChange}
            ></input><h3>Infojob</h3>

        </ComponentQuestion>
    )
}

export default Question8;