import React, {useState} from "react";
import {Pesquisa, GarotaNuvem} from "./style";
import PesquisaEmpresas from "../../components/PesquisaEmpresas";
import Question1 from "../../components/Question1";
import Question2 from "../../components/Question2";
import Question3 from "../../components/Question3";
import Question4 from "../../components/Question4";
import Question5 from "../../components/Question5";
import Question6 from "../../components/Question6";
import Question7 from "../../components/Question6";
import Question8 from "../../components/Question8";
import Question9 from "../../components/Question9";
import Question10 from "../../components/Question10";
import Question11 from "../../components/Question11";
import Question12 from "../../components/Question12";
import ThankYouPage from "../../components/PaginaObrigado";

const MainPesquisa: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resposnses, setResponses] = useState<{[key: string]: string[]}>({});
    
    const questions = [
        <Question1></Question1>,
        <Question2></Question2>,
        <Question3></Question3>,
        <Question4></Question4>,
        <Question5></Question5>,
        <Question6></Question6>,
        <Question7></Question7>,
        <Question8></Question8>,
        <Question9></Question9>,
        <Question10></Question10>,
        <Question11></Question11>,
        <Question12></Question12>,
        <ThankYouPage></ThankYouPage>,

    ]
    
    const  isThakyouPage = currentQuestion === questions.length;

    const handleStartClick = () => {
        setCurrentQuestion(1)
    }

    const handleNextQuestion = () =>{
        setCurrentQuestion(prevIndex => Math.min(prevIndex + 1, questions.length + 1));
    }

    const handlePrevQuestion = () =>{
        setCurrentQuestion(prevIndex => Math.min(prevIndex > 1? prevIndex -1: 0));
    }

    return(

        <Pesquisa>
            {currentQuestion === 0 ? (
                <PesquisaEmpresas onStartClick={handleStartClick}/>
            ) : (
                <div>
                    {questions[currentQuestion - 1]}
                    {!isThakyouPage &&(
                        <div>
                            <button className="buttonprevnext" onClick={handlePrevQuestion}>Voltar</button>
                            <button className="buttonprevnext" onClick={handleNextQuestion}>Próxima</button>
                        </div>
                    )}
                   </div>
            )}
            <GarotaNuvem></GarotaNuvem>
        </Pesquisa>
    )
}

export default MainPesquisa;