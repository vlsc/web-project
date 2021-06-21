import styled from "styled-components";

//div que comporta a lista de planos de ação
export const ListDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
`;

//item da lista
export const ListItem = styled.div`
    border-bottom: 1px solid #EBEBEB;
    padding: 10px;


`;

//titulo do item da lista
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 12px;
    line-height: 25px;
`;

//informações em cinza
export const Subtitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    line-height: 18px;
    color: #b0b0b0;
`;

//tag de realizado
export const ElipseR = styled.div`
    display: flex;
    box-sizing: border-box;
    border-radius: 100px;
    width: 6rem;
    height: 1.2rem;
    border: 1px solid #7FC008;

    h6{
        margin: auto;
        max-height: 20px;
        margin-top: -4px;
        color: #7FC008;
    }
`;

//tag de pendente
export const ElipseP = styled.div`
    display: flex;
    box-sizing: border-box;
    border-radius: 100px;
    width: 6rem;
    height: 1.2rem;
    border: 1px solid orange;

    h6{
        margin: auto;
        max-height: 20px;
        margin-top: -4px;
        color: orange;
    }
`;

//tag de não realizado
export const ElipseN = styled.div`
    display: flex;
    box-sizing: border-box;
    border-radius: 100px;
    width: 6rem;
    height: 1.2rem;
    border: 1px solid red;

    h6{
        margin: auto;
        max-height: 20px;
        margin-top: -4px;
        color: red;
    }
`;