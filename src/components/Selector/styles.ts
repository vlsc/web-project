import styled from 'styled-components'

interface EllipseType{
    height: number;
}


export const Ellipse = styled.div<EllipseType>`
    width: 80%;
    height: ${({height}) => height}px;
    left: 743px;
    top: 97px;
    background: #C4C4C4;
    border-radius: 10px;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
    transition: 0.3s;
    z-index: 1;
    max-width: 1168px;
    &:hover{
        cursor: pointer;
    }
    @media(max-width: 800px){
        width: 122px;
        margin-right: 8%;
    }
`;

export const EllipseDiv = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Options = styled.div`
    width: 244px;
    height: 100%;
    background-color: #C4C4C4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    transition: 0.3s;
    overflow:hidden;
    z-index: 1;
`;





