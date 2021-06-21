import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fafafa;
        color: #333;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;
    }
`;