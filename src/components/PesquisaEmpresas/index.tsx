import React, {useState} from 'react';
import {ContentMain, Iniciar, LogoContainer, LogoImage } from './styles';
import backgroundLogo from '../../assets/logo.png';


interface PesquisaEmpresasProps{
    onStartClick: () => void;
}

const PesquisaEmpresas: React.FC<PesquisaEmpresasProps> = ({onStartClick}) =>{
    return(
        <ContentMain>
            <div className='text-content'>
                <h2>Olá recrutadores, somos a <strong>nuvem</strong></h2>
                <h1>Buscamos criar uma nova ferramenta para aproximar pessoas, ideias e principalmente ajudar
                na contratação de profissionais.</h1>

                <h2>No momento, queremos apenas um pouco do seu tempo para 
                responder a algumas perguntas.</h2>
                <Iniciar onClick={onStartClick}><h3>Vamos lá?</h3></Iniciar>

            </div>           
        </ContentMain>
    )
}

export default PesquisaEmpresas;