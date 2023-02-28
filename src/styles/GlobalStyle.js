import { createGlobalStyle } from 'styled-components'
import { cores } from './variaveis'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: ${cores.text};
    }

    body{
        background-color: ${cores.backgroud};
    }
`