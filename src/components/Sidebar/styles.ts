import styled from 'styled-components';

interface DivType {
    width: number;
    height: number;
}

//div que guarda a sidebar, recebe width e height via props
export const DivSidebar = styled.div<DivType>`
    height: 100%;
    width: ${({ width }) => width}px;
    transition: 0.4s;
    max-width: 1168px;

    @media(max-width: 580px){
        width: 100vw;
        height: ${({height}) => height}px;
    }

    @media(max-width: 860px){
        width: 100vw;
        height: ${({height}) => height}px;
    }

`;

//o "body" da sidebar, recebe width e height via props
export const Body = styled.div<DivType>`
    width: ${({ width }) => width}px;
    height: 100%;
    background-color: #fafafa;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    padding-top: 100px;
    position: fixed;
    transition: 0.4s;
    max-width: 1168px;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media(max-width: 860px){
        width: 100%;
        height: ${({height}) => height}px;
        padding-top: 0px;
    }
`;

export const Button = styled.div`
    display: flex;
    width: 17px;
    height: 17px;
    background: #0794B3;
    border-radius: 50%;
    max-width: 1168px;
    margin-left: 95%;

    @media(max-width:860px){
        transform: rotate(-90deg);
        margin-left: 0%;
    }
    &:hover{
        cursor: pointer;
        background: #0fb2d6;
        transition: 0.3s;
    }
`;

//texto dentro da sidebar
export const Panel = styled.div<any>`
    position: relative;
    font-size: ${({ fontSize }) => fontSize}px;
    verticalAlign: 'text-bottom';
    line-height: 26px;
    color: #0794B2;
    overflow: hidden;

    &:hover{
        cursor: pointer;
        background:#f0f0f0;
        font-size: 14px;
        transition: 0.3s;
    }
`;
