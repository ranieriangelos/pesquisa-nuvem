import React, {useState} from "react";
import {ContentThankyou} from './style';
import {useNavigate} from 'react-router-dom';

const ThankYouPage: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        navigate('/thank-you')
    }

    return(
        <ContentThankyou>
            <h1>Obrigado por suas respostas!</h1>
            <h3>Cadastre seu email e receba </h3>
        </ContentThankyou>
    )
}

export default ThankYouPage;