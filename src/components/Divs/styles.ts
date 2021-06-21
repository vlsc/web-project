import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fafafa;
    display: flex;
    width: 100%;
    box-sizing: border-box;

    @media(max-width: 860px){
        display: flex;
        flex-direction: column;
        background-color: 'purple';

    }
`;

//div que guarda a sidebar e a parte do gradiente lateral
export const LateralDiv = styled.div`
    display: grid;
    grid-template-columns: 51px auto;

    @media(max-width: 860px){
        grid-template-rows: 51px auto;

        grid-template-columns: auto;
    }
`;

//div que guarda o título "Painel de controle" e a div do boxes
export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 30px;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;

    @media(max-width: 860px){
        margin: 0;
        display: flex;
        flex-direction: column;
 
    }
`;

//div que guarda os boxes
export const DataDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    flex-wrap: wrap;
    width: 100%;

    @media(max-width: 860px){
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
`;

//div que guarda a coluna esquerda de boxes:
//Histórico, Inspeções, Planos de ação e Inspeções agendadas
export const LeftDiv = styled.div`
    display: grid;
    grid-template-rows: 300px 340px 325px;
    align-self: center;
    grid-gap: 10px;
    box-sizing: border-box;
    min-width: 600px;

    @media(max-width: 860px){
        margin: 0 20px;
        min-width: auto;
        grid-template-rows: 300px;
    }
`;

//div que guarda os boxes "Inspeções" e "Planos de ação" na coluna esquerda
export const SubLeftDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    max-width: 1168px;

    @media(max-width:860px){
        display: flex;
        flex-direction: column;
    }
`;

//div que guarda a coluna direita de boxes
export const RightDiv = styled.div`
    display: grid;
    grid-template-rows: 300px 675px;
    grid-gap: 10px;
    box-sizing: border-box;
    align-self: center;
    overflow: hidden;
    align-content: center;
    align-items: center;

    @media(max-width:860px){
        min-width: 300px;
        width: 60%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
    }
`;

//uso para os títulos de cada box
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%
`;