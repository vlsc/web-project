import styled from 'styled-components'

export const Circle = styled.div`
    border: 2px solid;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: ${({color}) => color};
    margin: 20%;
`;
