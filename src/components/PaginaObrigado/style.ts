import styled from "styled-components";

export const ContentThankyou = styled.div`

    color: #fff;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 350;
        font-size: 20pt;
        margin: 0 0 40px;
        line-height: 1;
        width: 330px;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 14pt;
        margin: 0 0 15px;
        width: 330px;
    }

    input{
        border: none;
        border-radius: 20px;
        padding: 6px;
        float: left;
    }

    .inputOutros{
        width: 100%;
    }

    textarea {
        border: none;
        border-radius: 20px;
        padding: 15px;
        width: 85%;
        height: 70px;
        color: #696969;
        resize: none;  /* Impede o redimensionamento do textarea */
        overflow: hidden;  /* Esconde barras de rolagem */
        line-height: 1.5;  /* Ajusta a altura da linha para espaçamento de texto */
        font-family: roboto;
    }

    textarea:focus {
        outline: none;
        border: none;
    }

    .question-enter {
  opacity: 0;
  transform: translateX(100%);
}
.question-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
.question-exit {
  opacity: 1;
  transform: translateX(0);
}
.question-exit-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 300ms, transform 300ms;
}

`