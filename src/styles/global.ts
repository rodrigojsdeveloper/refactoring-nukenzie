import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }

    :root {
        --white: #FFF;
        --background-home: #212529;
        --background-button-home: #FD377E;
        --background-button-home-hover: rgba(253, 10, 120);
        --background-header-dashboard: #F8F9FA;
        --background-button-dashboard: #F0F0F1;
        --color-text-header: #5B6166;
        --color-error-label: #E50914;
        --color-price-card: #343A40;
        --color-box-shadow: rgba(0, 0, 0, 0.25);
        --color-span: #868E96;
        --border-input: #dcdcdc;
        --border-button: rgba(0, 0, 0, 0.1);
        --box-shadow-button: rgba(0, 0, 0, 0.02);
        --color-button: rgba(0, 0, 0, 0.85);
        --border-color-hover-button: rgba(0, 0, 0, 0.15);
        --box-shadow-button-dashboard: rgba(255, 255, 255, .7);
    }

    input {
        outline: none;
    }

    button {
        cursor: pointer;
        transition: .5s;
    }

    a {
        text-decoration: none;
    }
    
    &::-webkit-scrollbar {
        display: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
`;
