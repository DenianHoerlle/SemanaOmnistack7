import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
}

body {
    background: #fafafa;
    font: 14px, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
}
`;
