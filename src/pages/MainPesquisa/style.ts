import styled from "styled-components";
import backgroundImage from '../../assets/imagens/garota-nuvem.png';

export const Pesquisa = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #37b4f9 0%, #b3e1fb 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    .buttonprevnext {border: none;
    border-radius: 30px;
    padding: 10px 10px;
    margin: 40px 0 0 5vw;
    h3{font-weight: 300;}
    float: left;
    color: #696969;
    cursor: pointer;
    width: 100px;
    display: grid;
    }.buttonprevnext:hover{
        background: #696969; 
        color: #fff;
    }
`;

export const GarotaNuvem = styled.div`
   background: url(${backgroundImage});
   background-repeat: no-repeat;
   background-size: contain;
   width: 449px;
   height: 477px;
   margin: 5vh 0 0 0;
   justify-content: center;
   align-items: center;
   position: relative;

   @media (max-width: 768px) {
        display: none;
    }    
    @media (min-width: 820px) and (max-width: 1180px) {
        width: 100vw;
    }
`;
