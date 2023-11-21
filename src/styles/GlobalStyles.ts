import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-blue: #0F52BA;
  --color-white: #fff;
}

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
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

::-webkit-scrollbar {
  display: none;
}
`;

export default GlobalStyles;
