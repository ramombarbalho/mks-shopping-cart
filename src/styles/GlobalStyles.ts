import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}
`;

export default GlobalStyles;
