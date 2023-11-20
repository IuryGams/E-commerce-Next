import { createGlobalStyle, type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        primary: '#111',
        secondary: '#0070f3',
      },
} 


const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-decoration: none;
        list-style-type: none;
    }

    body{
        min-height: 100dvh;
        background-color: #d9d9d9;
    }
`

export default GlobalStyles