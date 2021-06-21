import styled from "styled-components";

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin-bottom: -30px;

    @media(max-width:860px){
        margin-left: 10%;
    }
`;