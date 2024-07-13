import styled from 'styled-components';

export const ContentMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 350;
        font-size: 20pt;
        margin: 0 0 40px 5vw;
        line-height: 1;
        width: 400px;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 14pt;
        margin: 0 0 15px 5vw;
        width: 400px;
    }

    @media (max-width: 768px) {
        width: 100vw;
        h1, h2 {
            width: auto;
            margin: 0 0 20px 5vw;
            font-size: 16pt;
            width: 85%;
        }

        .Iniciar {
            margin: 20px 0;
        }
    }
`;


export const Iniciar = styled.button`
    border: none;
    border-radius: 30px;
    padding: 10px 120px;
    margin: 40px 0 0 5vw;
    button:hover{
        background: #696969;
    }
    h3{font-weight: 300;}
    float: left;
    color: #696969;
    cursor: pointer;
    float: left;
    
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    
`

export const LogoImage = styled.img`
    width: 100px;
    height: 50px;
    object-fit: contain;

`