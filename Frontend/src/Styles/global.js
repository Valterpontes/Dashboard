import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.WHITE2};
        color: ${({ theme }) => theme.COLORS.WHITE };
        font-size: 1.6rem;

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab';
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }
    
    button, a {
        cursor: pointer;
        transition: filter 0,2s;
        transition: 300ms;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }


`