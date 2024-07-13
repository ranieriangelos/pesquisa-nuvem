import React from "react";
import {ComponentQuestion} from './style';

const Question12: React.FC = () =>{
    
    return(
        <ComponentQuestion>
            <h2>Satisfação e Melhorias</h2>
            <h3>Que tipo de suporte ou assistência você gostaria de receber dos sites de empregos, ou existe alguma informação que gostaria de compartilhar com a gente?</h3>
            <textarea 
                className="suportText"
            />
            
        </ComponentQuestion>
    )
}

export default Question12;