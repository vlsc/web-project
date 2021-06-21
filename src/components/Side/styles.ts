import styled from 'styled-components';

//barra lateral
export const Lateral = styled.div`
    width: 51px;
    height: 100%;
    background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
    position: fixed;
    max-width: 1168px;
    z-index: 3;
    @media(max-width: 860px){
        width: 100%;
        height: 51px;
    }
`;

//botão da barra lateral
export const BigButton = styled.div`
    margin-top: 130px;
    width: 61px;
    height: 61px;
    background: #FAFAFA;
    border-radius: 50%;
    justify-content: center;
    display: flex;
    max-width: 1168px;

    @media(max-width: 860px){
        margin-left: 50%;
        margin-top: 0%;
    }
`;