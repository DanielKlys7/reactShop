import { createGlobalStyle } from 'styled-components';

import { colors } from './variablesConfig';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        font-size: 10px;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        height: 100%;
        width: 100%;
        background: ${colors.gray100};;
    }

    #root {
        height: 100%;
    }
`;
